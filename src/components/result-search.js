import "../css/header.css";
/** 
 * React-элемент результатов поиска.
*/
export function ResultSearch(props) {
  return (
    <div className="result-search">
      {props.result.map((item) => {
        if (item.type === "profile") {
          return (
            <div className="result-item" key={item.profile.id}>
              <img
                className="result-item__photo"
                src={item.profile.photo_50}
                alt="Иконка"
              />
              <div className="result-item__info">
                {item.profile.first_name} {item.profile.last_name}
              </div>
            </div>
          );
        } else if (item.type === "group") {
          return (
            <div className="result-item" key={item.group.id}>
              <img
                className="result-item__photo"
                src={item.group.photo_50}
                alt="Иконка"
              />
              <div className="result-item__info">{item.group.name}</div>
            </div>
          );
        } else if (item.type === "vk_app") {
          return (
            <div className="result-item" key={item.app.id}>
              <img
                className="result-item__photo"
                src={item.app.icon_75}
                alt="Иконка"
              />
              <div className="result-item__info">{item.app.title}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
