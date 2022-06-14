import { useContext } from "react";
import "../css/myPage.css";
import { Birthday } from "./birthday";
import { City } from "./city";
import { ContextData } from "./my-page";
import { University } from "./university";
/** 
 * React-элемент с основной информацией о профиле.
*/
export function InfoProfile(props) {
  const data = useContext(ContextData);
  return (
    <span className="right-column__item row">
      <div className="info__main">
        <div className="info__top">
          <div className="info__online">
            {data[9][0].online ? "онлайн" : "не в сети"}
          </div>
          <h1 className="info__name">
            {data[8].first_name} {data[8].last_name}
          </h1>
          <div className="info__status">{data[8].status}</div>
        </div>
        <div className="info__middle">
          {data[8].bdate_visibility && <Birthday />}
          {data[8].city.title && <City />}
          {data[9][0].university_name && <University />}
        </div>
      </div>
      <div className="info__bottom">
        <div className="counter">
          <div className="counter__count" id="count-friends-info">
            {data[0].count}
          </div>
          <div className="counter__label">друзей</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-followers-info">
            {data[6].count}
          </div>
          <div className="counter__label">подписчика</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-photos-info">
            {data[3].count}
          </div>
          <div className="counter__label">фотографии</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-tags-info">
            {data[4].count}
          </div>
          <div className="counter__label">отметок</div>
        </div>
      </div>
    </span>
  );
}
