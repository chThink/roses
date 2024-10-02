import { useNavigate } from "react-router-dom";
import info from "../assets/Info.png";
import verifynone from "../assets/verifynone.png";
import Alert from "../components/alert";

function EditProfile() {
  //[name, setName] = "Scarlet";
 
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/");
  };

  return (
    <div className="container__edit">
      <div className="header__profile">
        <div className="header__backbutton" onClick={goToProfile}></div>
        <div className="header__label">
          <p>EDIT PROFILE</p>
          <p className="p_config">Configuration</p>
        </div>
      </div>

      <div className="list">
        <div className="list__item">
          <div className="item__start">Name</div>
          <img className="icon__info" src={info} alt="" />
        </div>

        <div className="list__item">
          <input value={""}  />
        </div>

        <div className="list__item">
          <div className="item__start">Username</div>
          <img className="icon__info" src={info} alt="" />
        </div>

        <div className="list__item">
          <input />
        </div>
        <div className="list__item">
          <p className="text">
            In most cases, you'll be able to change your name back to{" "}
            <span>scarlet.roses </span>for another 14 days.{" "}
          </p>
        </div>
        <div className="list__item">
          <div className="item__start">Profile</div>
          <img className="icon__info" src={info} alt="" />
        </div>
        <div className="list__item">
          <span className="text">
            http://roses.vip/<span>scarlet.roses </span>
          </span>
        </div>
        <Alert />

        <div className="buttons">
          <div className="button button__DONE ">
            <b>DONE</b>
          </div>

          <div className="button button__CANCEL">
            <b>CANCEL</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
