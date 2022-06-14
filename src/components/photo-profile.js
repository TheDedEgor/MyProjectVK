import { useContext } from "react";
import "../css/myPage.css";
import { ContextData } from "./my-page";
/** 
 * React-элемент фото профиля.
*/
export function PhotoProfile(props) {
  const data = useContext(ContextData);
  return (
    <span className="left-column__item row">
      <img
        className="avatar"
        alt="Моя фотография"
        src={data[7].items[0].sizes[4].url}
      />
    </span>
  );
}
