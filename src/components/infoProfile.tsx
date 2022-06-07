import "../css/myPage.css";
import { Birthday } from "./birthday";
import { City } from "./city";
import { University } from "./university";

export function InfoProfile(props: { data: any }) {
  return (
    <span className="right-column__item row">
      <div className="info__main">
        <div className="info__top">
          <div className="info__online">
            {props.data[9][0].online ? "онлайн" : "не в сети"}
          </div>
          <h1 className="info__name">
            {props.data[8].first_name} {props.data[8].last_name}
          </h1>
          <div className="info__status">{props.data[8].status}</div>
        </div>
        <div className="info__middle">
            {props.data[8].bdate_visibility && <Birthday data={props.data[8]}/>}
            {props.data[8].city.title && <City data={props.data[8]}/>}
            {props.data[9][0].university_name && <University data={props.data[9][0]}/>}
        </div>
      </div>
      <div className="info__bottom">
        <div className="counter">
          <div className="counter__count" id="count-friends-info">
            {props.data[0].count}
          </div>
          <div className="counter__label">друзей</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-followers-info">
            {props.data[6].count}
          </div>
          <div className="counter__label">подписчика</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-photos-info">
          {props.data[3].count}
          </div>
          <div className="counter__label">фотографии</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-tags-info">
           {props.data[4].count}
          </div>
          <div className="counter__label">отметок</div>
        </div>
      </div>
    </span>
  );
}
