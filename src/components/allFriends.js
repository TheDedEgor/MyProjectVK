import "../css/myPage.css";
import { PeopleRow } from "./people-row";
/** 
 * React-элемент с информацией обо всех друзьях.
*/
export function AllFriends(props) {
  return (
    <span className="left-column__item row">
      <div className="header-top">
        <span className="header-label">Друзья</span>
        <span className="header-count" id="count-friends-content">
          {props.data_all_friends.count}
        </span>
      </div>
      <div className="all-friends">
        <PeopleRow data_friends={props.data_all_friends.items.slice(0, 3)} />
        <PeopleRow data_friends={props.data_all_friends.items.slice(3, 6)} />
      </div>
      <div className="header-top">
        <span className="header-label">Друзья онлайн</span>
        <span className="header-count" id="count-online-friends-content">
          {props.data_online_friends.length}
        </span>
      </div>
      <div className="online-friends">
        <PeopleRow data_friends={props.data_online_friends.slice(0, 3)} />
        <PeopleRow data_friends={props.data_online_friends.slice(3, 6)} />
      </div>
    </span>
  );
}
