import "../css/myPage.css";
import { ContextData } from "./my-page";
import { useContext } from "react";
/** 
 * React-элемент с подарками.
*/
export function Gifts(props) {
  const data = useContext(ContextData);
  return (
    <span className="left-column__item row">
      <div className="header-top">
        <span className="header-label"> Подарки </span>
        <span className="header-count" id="count-gifts-content">
          {data[2].count}
        </span>
      </div>
      <div className="gifts">
        {data[2].items.map((item) => (
          <img
            className="gift"
            alt="Подарок"
            src={item.gift.thumb_96}
            key={item.id}
          />
        ))}
      </div>
    </span>
  );
}
