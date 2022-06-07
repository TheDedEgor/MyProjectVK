import "../css/myPage.css";

export function University(props: { data: any }) {
  return (
    <div className="info__row">
      <div className="label">Место учебы:</div>
      <div className="labeleed">{props.data.university_name}</div>
    </div>
  );
}
