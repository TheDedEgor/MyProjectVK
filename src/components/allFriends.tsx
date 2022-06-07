import "../css/myPage.css";

export function AllFriends(props: { data: any }) {
  return (
    <span className="left-column__item row">
      <div className="header-top">
        <span className="header-label">Друзья</span>
        <span className="header-count" id="count-friends-content">
          {props.data[0].count}
        </span>
      </div>
      <div className="all-friends">
        <div className="people-row">
          {props.data[0].items.slice(0, 3).map((item: any, index: number) => (
            <div className="people-cell" key={index}>
              <img
                className="friend-avatar"
                alt="Фото друга"
                src={item.photo_200_orig}
              />
              <div className="friend-name">{item.first_name}</div>
            </div>
          ))}
        </div>
        <div className="people-row">
          {props.data[0].items.slice(3, 6).map((item: any, index: number) => (
            <div className="people-cell" key={index}>
              <img
                className="friend-avatar"
                alt="Фото друга"
                src={item.photo_200_orig}
              />
              <div className="friend-name">{item.first_name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="header-top">
        <span className="header-label">Друзья онлайн</span>
        <span className="header-count" id="count-online-friends-content">
          {props.data[1].length}
        </span>
      </div>
      <div className="online-friends">
        <div className="people-row">
          {props.data[1].slice(0, 3).map((item: any, index: number) => {
            return (
              <div className="people-cell" key={index}>
                <img
                  className="friend-avatar"
                  alt="Фото друга"
                  src={item.photo_200_orig}
                />
                <div className="friend-name">{item.first_name}</div>
              </div>
            );
          })}
        </div>
        <div className="people-row">
          {props.data[1].slice(3, 6).map((item: any, index: number) => (
            <div className="people-cell" key={index}>
              <img
                className="friend-avatar"
                alt="Фото друга"
                src={item.photo_200_orig}
              />
              <div className="friend-name">{item.first_name}</div>
            </div>
          ))}
        </div>
      </div>
    </span>
  );
}
