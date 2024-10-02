import "../App.scss";
import arrow from "../assets/arrow.png";
import verify from "../assets/verify.png";
import rosess from "../assets/rosess.png";
import woman from "../assets/woman.png";

import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/edit");
  };

  return (
    <div className="container__info">
      <div className="edit__profile">
        <img src={woman} className="profile__background" />

        <div className="profile__picture">PROFILE PICTURE</div>
      </div>

      <div className="list">
        <div className="list__item" onClick={goToEdit}>
          <div className="item__start">Profile</div>
          <div className="item__mid">
            {" "}
            Scarlet
            <img className="item__image" src={verify}></img>
            <img className="item__image" src={arrow}></img>
          </div>
        </div>

        <div className="list__item">
          <div className="item__start">Bio</div>
          <div className="item__mid">
            Edit
            <img className="item__image" src={arrow}></img>
          </div>
        </div>

        <div className="list__item">
          <div className="item__start">Gender</div>
          <div className="item__mid">
            Add
            <img className="item__image" src={arrow}></img>
          </div>
        </div>

        <div className="list__item">
          <div className="item__start">Age</div>
          <div className="item__mid">
            Add
            <img className="item__image" src={arrow}></img>
          </div>
        </div>

        <div className="list__item">
          <div className="item__start">Ethinicity</div>
          <div className="item__mid">
            Caucasian
            <img className="item__image" src={arrow}></img>
          </div>
        </div>

        <div className="list__item">
          <div className="item__start">Height</div>
          <div className="item__mid">
            5'9"/ 1.82m
            <img className="item__image" src={arrow}></img>
          </div>
        </div>

        <div className="list__item">
          <div className="item__start">Wight</div>
          <div className="item__mid">
            75kg/ 165lb
            <img className="item__image" src={arrow}></img>
          </div>
        </div>

        <div className="list__item">
          <div className="item__start">Language</div>
          <div className="item__mid">
            English, Spanish, Portuguese
            <img className="item__image" src={arrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
