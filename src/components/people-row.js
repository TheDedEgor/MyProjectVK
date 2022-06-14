import "../css/myPage.css";
/** 
 * React-элемент со строкой друзей.
*/
export function PeopleRow(props) {
    return (
        <div className="people-row">
            {props.friends.map((item) => (
                <div className="people-cell" key={item.id}>
                    <img
                        className="friend-avatar"
                        alt="Фото друга"
                        src={item.photo_200_orig}
                    />
                    <div className="friend-name">{item.first_name}</div>
                </div>
            ))}
        </div>
    );
}