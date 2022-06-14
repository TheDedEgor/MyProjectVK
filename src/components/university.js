import { useContext } from "react";
import "../css/myPage.css";
import { ContextData } from "./my-page";
/** 
 * React-элемент об учебе.
*/
export function University(props) {
  const data = useContext(ContextData);
  return (
    <div className="info__row">
      <div className="label">Место учебы:</div>
      <div className="labeleed">{data[9][0].university_name}</div>
    </div>
  );
}
