import "../css/myPage.css";
import likesIcon from "../icons/likes.svg";
import viewIcon from "../icons/views.svg";

export function Posts(props: { data: any }) {
  return (
    <span className="right-column__item row">
      <div className="header-top">
        <span className="header-label"> Все записи </span>
      </div>
      {props.data.items.map((item: any, index: number) => {
        if (item.post_source.data === "profile_photo") {
          return (
            <div className="post" key={index}>
              <img
                className="photo-post"
                alt="Фото поста"
                src={item.attachments[0].photo.sizes[4].url}
              />
              <div className="info-post">
                <div className="likes">
                  <img className="like-ico" src={likesIcon} />
                  <span className="likes-count">{item.likes.count}</span>
                </div>
                <div className="views">
                  <img className="view-ico" src={viewIcon} />
                  <span className="views-coint">{item.views.count}</span>
                </div>
              </div>
            </div>
          );
        }
      })}
    </span>
  );
}
