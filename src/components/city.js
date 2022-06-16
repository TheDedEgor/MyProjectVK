import "../css/myPage.css";
/** 
 * React-элемент с информацией об городе.
*/
export function City(props) {
  return (
    <div className="info__row">
      <div className="label">Город:</div>
      <div className="labeleed">{props.data_city.city.title}</div>
    </div>
  );
}
