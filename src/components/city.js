import { useContext } from "react";
import "../css/myPage.css";
import { ContextData } from "./my-page";
/** 
 * React-элемент с информацией об городе.
*/
export function City(props) {
  const data = useContext(ContextData);
  return (
    <div className="info__row">
      <div className="label">Город:</div>
      <div className="labeleed">{data[8].city.title}</div>
    </div>
  );
}
