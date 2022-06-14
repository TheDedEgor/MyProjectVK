import axios from "axios";
import { useState } from "react";
import { access_token } from "../consts";
import "../css/header.css";
import { ResultSearch } from "./result-search";
import debounce from "lodash.debounce"
/** 
 * React-элемент поиска.
*/
export function Search() {
  const [isVisible, setVisible] = useState(false);
  const [arrayResult, setArrayResult] = useState([]);

  function showOrHiddenResult() {
    setVisible(!isVisible);
    getResult();
  }

  function getResult(event) {
    const q = event ? event.target.value : "";
    const url = `https://api.vk.com/method/search.getHints?q=${q}&fields=photo_50&limit=10&access_token=${access_token}&v=5.131`;
    axios
      .get(url)
      .then((result) => setArrayResult(result.data.response.items.slice(0, 8)))
      .catch(err => console.log(err));
  }
  const resultDebounced = debounce(getResult, 500);
  return (
    <div>
      <input
        onFocus={showOrHiddenResult}
        onBlur={showOrHiddenResult}
        onChange={resultDebounced}
        type="search"
        className="search"
        placeholder="Поиск"
      />
      {isVisible && <ResultSearch result={arrayResult} />}
    </div>
  );
}
