import { useContext } from "react";
import "../css/myPage.css";
import { ContextData } from "./my-page";
/** 
 * React-элемент фотографий.
*/
export function Photos(props) {
  const data = useContext(ContextData);
  return (
    <span className="right-column__item row">
      <div className="header-top">
        <span className="header-label"> Мои фотографии </span>
        <span className="header-count" id="count-photos">
          {data[3].count}
        </span>
      </div>
      <div className="photos">
        {data[3].items.map((item) => (
          <img className="photo" src={item.sizes[3].url} alt="Фото из сохраненных фотографий" key={item.id} />
        ))}
      </div>
    </span>
  );
}
