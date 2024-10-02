import "../App.scss";
import roses from "../assets/roses.png";
import logo from "../assets/logo.svg";
import woman from '../assets/woman.png'
import chat from '../assets/chat.png'


function Header() {
  return (
    <div className="container__header">
      <img src={roses} className="app__logo" />
      <div className="content">
        <img src={chat} alt="" className="app__chat" />
        <img src={woman} alt="" className="app__profile" />
      </div>
    </div>
  );
}

export default Header;
