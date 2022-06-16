import "../css/myPage.css";
import likesIcon from "../icons/likes.svg";
import viewIcon from "../icons/views.svg";
/** 
 * React-элемент с постами.
*/
export function Posts(props) {
  return (
    <span className="right-column__item row">
      <div className="header-top">
        <span className="header-label"> Все записи </span>
      </div>
      {props.data_posts.items.map((item) => {
        if (item.post_source.data === "profile_photo") {
          return (<div className="post" key={item.id}>
            <img
              className="photo-post"
              alt="Фото поста"
              src={item.attachments[0].photo.sizes[4].url}
            />
            <div className="info-post">
              <div className="likes">
                <img className="like-ico" src={likesIcon} alt="Иконка лайка" />
                <span className="likes-count">{item.likes.count}</span>
              </div>
              <div className="views">
                <img className="view-ico" src={viewIcon} alt="Иконка просмотренно" />
                <span className="views-coint">{item.views.count}</span>
              </div>
            </div>
          </div>);
        }
      })}
    </span>
  );
}
