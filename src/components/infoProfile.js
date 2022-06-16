import "../css/myPage.css";
import { Birthday } from "./birthday";
import { City } from "./city";
import { University } from "./university";
/** 
 * React-элемент с основной информацией о профиле.
*/
export function InfoProfile(props) {
  return (
    <span className="right-column__item row">
      <div className="info__main">
        <div className="info__top">
          <div className="info__online">
            {props.data_online_university[0].online ? "онлайн" : "не в сети"}
          </div>
          <h1 className="info__name">
            {props.data_info_profile.first_name} {props.data_info_profile.last_name}
          </h1>
          <div className="info__status">{props.data_info_profile.status}</div>
        </div>
        <div className="info__middle">
          {props.data_info_profile.bdate_visibility && <Birthday data_birth={props.data_info_profile} />}
          {props.data_info_profile.city.title && <City data_city={props.data_info_profile} />}
          {props.data_online_university[0].university_name && <University data_univer={props.data_online_university[0]} />}
        </div>
      </div>
      <div className="info__bottom">
        <div className="counter">
          <div className="counter__count" id="count-friends-info">
            {props.data_counts.friends}
          </div>
          <div className="counter__label">друзей</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-followers-info">
            {props.data_counts.subscribers}
          </div>
          <div className="counter__label">подписчика</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-photos-info">
            {props.data_counts.photos}
          </div>
          <div className="counter__label">фотографии</div>
        </div>
        <div className="counter">
          <div className="counter__count" id="count-tags-info">
            {props.data_counts.tags}
          </div>
          <div className="counter__label">отметок</div>
        </div>
      </div>
    </span>
  );
}
