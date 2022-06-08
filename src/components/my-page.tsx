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
/** 
 * React-элемент с основным содержанием страницы.
*/
export function MyPage() {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.response));
  }, []);
  return (
    <main className="content">
      <div className="left-column">
        {data && <PhotoProfile data={data[7]} />}
        {data && <Gifts data={data[2]} />}
        {data && <AllFriends data={data} />}
      </div>
      <div className="right-column">
        {data && <InfoProfile data={data} />}
        {data && <Photos data={data[3]} />}
        {data && <Posts data={data[5]} />}
      </div>
    </main>
  );
}
