import "../css/myPage.css";

export function Gifts(props: { data: any }) {
  return (
    <span className="left-column__item row">
      <div className="header-top">
        <span className="header-label"> Подарки </span>
        <span className="header-count" id="count-gifts-content">
          {props.data.count}
        </span>
      </div>
      <div className="gifts">
        {props.data.items.map((item: any, index: number) => (
          <img
            className="gift"
            alt="Подарок"
            src={item.gift.thumb_96}
            key={index}
          />
        ))}
      </div>
    </span>
  );
}
