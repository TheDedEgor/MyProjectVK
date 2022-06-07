import { months } from "../consts";
import "../css/myPage.css";

export function Birthday(props: { data: any }) {
    const birthday = props.data.bdate.split('.');
    let result ="";
    if(props.data.bdate_visibility===1 ){
        result = birthday[0] + " " + months[birthday[1] - 1] + " " + birthday[2];
    }
    else{
        result = birthday[0] + " " + months[birthday[1] - 1];
    }
  return (
    <div className="info__row">
      <div className="label">День рождения:</div>
      <div className="labeleed">
          {result}
      </div>
    </div>
  );
}
