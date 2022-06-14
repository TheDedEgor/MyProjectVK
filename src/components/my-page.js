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
 * Контекст со всеми данными из запроса
*/
export const ContextData = React.createContext();
/** 
 * React-элемент с основным содержанием страницы.
*/
export function MyPage() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.response)).catch(err => console.log(err));
  }, []);
  return (
    <ContextData.Provider value={data}>
      <main className="content">
        <div className="left-column">
          {data && <PhotoProfile />}
          {data && <Gifts />}
          {data && <AllFriends />}
        </div>
        <div className="right-column">
          {data && <InfoProfile />}
          {data && <Photos />}
          {data && <Posts />}
        </div>
      </main>
    </ContextData.Provider>
  );
}
