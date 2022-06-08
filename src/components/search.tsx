import axios from "axios";
import { BaseSyntheticEvent, useState } from "react";
import { access_token } from "../consts";
import "../css/header.css";
import { ResultSearch } from "./result-search";
/** 
 * React-элемент поиска.
*/
export function Search() {
  const [isVisible, setVisible] = useState(false);
  const [arrayResult, setArrayResult] = useState<any>([]);

  function showOrHiddenResult() {
    setVisible(!isVisible);
    baseResult();
  }

  function getResult(event: BaseSyntheticEvent) {
    const q = event.target.value;
    const url = `https://api.vk.com/method/search.getHints?q=${q}&fields=photo_50&limit=10&access_token=${access_token}&v=5.131`;
    axios
      .get(url)
      .then((result) => setArrayResult(result.data.response.items.slice(0, 8)));
  }

  function baseResult() {
    const q = "";
    const url = `https://api.vk.com/method/search.getHints?q=${q}&fields=photo_50&limit=10&access_token=${access_token}&v=5.131`;
    axios
      .get(url)
      .then((result) => setArrayResult(result.data.response.items.slice(0, 8)));
  }

  return (
    <div>
      <input
        onFocus={showOrHiddenResult}
        onBlur={showOrHiddenResult}
        onChange={getResult}
        type="search"
        className="search"
        placeholder="Поиск"
      />
      {isVisible && <ResultSearch result={arrayResult} />}
    </div>
  );
}
