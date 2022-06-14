import vkLogo from "../icons/vk.svg";
import messageLogo from "../icons/message.svg";
import myPageLogo from "../icons/mypage.svg";
import photosLogo from "../icons/photos.svg";
import newsLogo from "../icons/news.svg";
import friendsLogo from "../icons/friends.svg";
import "../css/header.css";
import { Search } from "./search";
/** 
 * React-элемент Header страницы.
*/
export function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img className="logo__ico" src={vkLogo} alt="Лого" />
        <h1 className="logo__title">ВКОНТАКТЕ</h1>
      </a>
      <nav className="menu">
        <a href="/" className="menu__tooltip link">
          <img className="menu__icon" src={myPageLogo} alt="Моя страница" />
          <span className="menu__tooltiptext">Моя страница</span>
        </a>
        <a href="/html/mypage.html" className="menu__tooltip link">
          <img className="menu__icon" src={newsLogo} alt="Новости" />
          <span className="menu__tooltiptext">Новости</span>
        </a>
        <a href="/" className="menu__tooltip link">
          <img className="menu__icon" src={messageLogo} alt="Мессенджер" />
          <span className="menu__tooltiptext">Мессенджер</span>
        </a>
        <a href="/" className="menu__tooltip link">
          <img className="menu__icon" src={friendsLogo} alt="Друзья" />
          <span className="menu__tooltiptext">Друзья</span>
        </a>
        <a href="/" className="menu__tooltip link">
          <img className="menu__icon" src={photosLogo} alt="Фотографии" />
          <span className="menu__tooltiptext">Фотографии</span>
        </a>
      </nav>
      <div>
        <Search />
      </div>
    </header>
  );
}
