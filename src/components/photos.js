import "../css/myPage.css";
/** 
 * React-элемент фотографий.
*/
export function Photos(props) {
  return (
    <span className="right-column__item row">
      <div className="header-top">
        <span className="header-label"> Мои фотографии </span>
        <span className="header-count" id="count-photos">
          {props.data_photos.count}
        </span>
      </div>
      <div className="photos">
        {props.data_photos.items.map((item) => (
          <img className="photo" src={item.sizes[3].url} alt="Фото из сохраненных фотографий" key={item.id} />
        ))}
      </div>
    </span>
  );
}
