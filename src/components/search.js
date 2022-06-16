import axios from "axios";
import { useEffect, useState } from "react";
import { access_token } from "../consts";
import "../css/header.css";
import { ResultSearch } from "./result-search";
import useDebounce from "../hooks/debounceHook";
/** 
 * React-элемент поиска.
*/
export function Search() {
  const [isVisible, setVisible] = useState(false);
  const [arrayResult, setArrayResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        getResult(debouncedSearchTerm).then(result => {
          setArrayResult(result);
        });
      } else {
        setArrayResult([]);
      }
    },
    [debouncedSearchTerm]
  );

  function showOrHiddenResult() {
    setVisible(!isVisible);
    getResult('').then(result => {
      setArrayResult(result);
    });
  }

  function getResult(q) {
    const url = `https://api.vk.com/method/search.getHints?q=${q}&fields=photo_50&limit=10&access_token=${access_token}&v=5.131`;
    return (axios
      .get(url)
      .then(result => result.data.response.items.slice(0, 8))
      .catch(err => {
        console.log(err);
        return [];
      }));
  }

  return (
    <div>
      <input
        onFocus={showOrHiddenResult}
        onBlur={showOrHiddenResult}
        onChange={e => setSearchTerm(e.target.value)}
        type="search"
        className="search"
        placeholder="Поиск"
      />
      {isVisible && <ResultSearch result={arrayResult} />}
    </div>
  );
}
