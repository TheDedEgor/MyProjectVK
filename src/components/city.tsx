import "../css/myPage.css";
/** 
 * React-элемент с информацией об городе.
*/
export function City(props: { data: any }) {
  return (
    <div className="info__row">
      <div className="label">Город:</div>
      <div className="labeleed">{props.data.city.title}</div>
    </div>
  );
}
