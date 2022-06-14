import { useContext } from "react";
import { months } from "../consts";
import "../css/myPage.css";
import { ContextData } from "./my-page";
/** 
 * React-элемент с информацией об дне рождения.
*/
export function Birthday(props) {
  const data = useContext(ContextData);
  const birthday = data[8].bdate.split('.');
  let result = "";
  if (data[8].bdate_visibility === 1) {
    result = birthday[0] + " " + months[birthday[1] - 1] + " " + birthday[2];
  }
  else {
    result = birthday[0] + " " + months[birthday[1] - 1];
  }
  return (
    <div className="info__row">
      <div className="label">День рождения:</div>
      <div className="labeleed">
        {result}
      </div>
    </div>
  );
}
