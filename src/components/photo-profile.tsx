import "../css/myPage.css";
/** 
 * React-элемент фото профиля.
*/
export function PhotoProfile(props: { data: any }) {
  return (
    <span className="left-column__item row">
      <img
        className="avatar"
        alt="Моя фотография"
        src={props.data.items[0].sizes[4].url}
      />
    </span>
  );
}
