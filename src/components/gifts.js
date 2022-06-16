import "../css/myPage.css";
/** 
 * React-элемент с подарками.
*/
export function Gifts(props) {
  return (
    <span className="left-column__item row">
      <div className="header-top">
        <span className="header-label"> Подарки </span>
        <span className="header-count" id="count-gifts-content">
          {props.data_gifts.count}
        </span>
      </div>
      <div className="gifts">
        {props.data_gifts.items.map((item) => (
          <img
            className="gift"
            alt="Подарок"
            src={item.gift.thumb_96}
            key={item.id}
          />
        ))}
      </div>
    </span>
  );
}
