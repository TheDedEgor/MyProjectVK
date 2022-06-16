import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../consts";
import "../css/myPage.css";
import { AllFriends } from "./allFriends";
import { Gifts } from "./gifts";
import { InfoProfile } from "./infoProfile";
import { PhotoProfile } from "./photo-profile";
import { Photos } from "./photos";
import { Posts } from "./posts";
import React from "react";

/** 
 * React-элемент с основным содержанием страницы.
*/
export function MyPage() {
  /*
      data[0] - данные о всех друзьях.
      data[1] - данные о друзьях онлайн.
      data[2] - данные о подарках.
      data[3] - данные о фотографиях.
      data[4] - данные об отметках.
      data[5] - данные о постах.
      data[6] - данные о подписчиках.
      data[7] - данные о фото профиля.
      data[8] - данные об основной информации профиля.
      data[9] - данные об онлайн статусе и университете.
  */
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.response)).catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
      <div className="left-column">
        {data && <PhotoProfile data_photo={data[7]} />}
        {data && <Gifts data_gifts={data[2]} />}
        {data && <AllFriends data_all_friends={data[0]} data_online_friends={data[1]} />}
      </div>
      <div className="right-column">
        {data && <InfoProfile
          data_online_university={data[9]}
          data_info_profile={data[8]}
          data_counts={{
            friends: data[0].count,
            subscribers: data[6].count,
            photos: data[3].count,
            tags: data[4].count
          }} />}
        {data && <Photos data_photos={data[3]} />}
        {data && <Posts data_posts={data[5]} />}
      </div>
    </main>
  );
}
