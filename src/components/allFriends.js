import { useContext } from "react";
import "../css/myPage.css";
import { ContextData } from "./my-page";
import { PeopleRow } from "./people-row";
/** 
 * React-элемент с информацией обо всех друзьях.
*/
export function AllFriends(props) {
  const data = useContext(ContextData);
  return (
    <span className="left-column__item row">
      <div className="header-top">
        <span className="header-label">Друзья</span>
        <span className="header-count" id="count-friends-content">
          {data[0].count}
        </span>
      </div>
      <div className="all-friends">
        <PeopleRow friends={data[0].items.slice(0, 3)} />
        <PeopleRow friends={data[0].items.slice(3, 6)} />
      </div>
      <div className="header-top">
        <span className="header-label">Друзья онлайн</span>
        <span className="header-count" id="count-online-friends-content">
          {data[1].length}
        </span>
      </div>
      <div className="online-friends">
        <PeopleRow friends={data[1].slice(0, 3)} />
        <PeopleRow friends={data[1].slice(3, 6)} />
      </div>
    </span>
  );
}
