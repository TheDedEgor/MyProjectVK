import "../css/myPage.css";
/** 
 * React-элемент фотографий.
*/
export function Photos(props: { data: any }) {
  return (
    <span className="right-column__item row">
      <div className="header-top">
        <span className="header-label"> Мои фотографии </span>
        <span className="header-count" id="count-photos">
          {props.data.count}
        </span>
      </div>
      <div className="photos">
        {props.data.items.map((item: any, index: number) => (
          <img className="photo" src={item.sizes[3].url} key={index} />
        ))}
      </div>
    </span>
  );
}
