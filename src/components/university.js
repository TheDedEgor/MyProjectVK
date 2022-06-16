import "../css/myPage.css";
/** 
 * React-элемент об учебе.
*/
export function University(props) {
  return (
    <div className="info__row">
      <div className="label">Место учебы:</div>
      <div className="labeleed">{props.data_univer.university_name}</div>
    </div>
  );
}
