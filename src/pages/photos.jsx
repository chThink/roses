import React, { useState } from "react";
import woman from "../assets/woman.png";
import logo from "../assets/logo.svg";
function Photos() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const triggerFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="container__photo">
      <div className="row">
        <div className="column column__left">
          <div className="item photo1">
            <img src={logo} className="icon__photo" />

            {/*  <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />

            <div onClick={triggerFileUpload} className="photo__selecet">
              {image ? (
                <img
                  className="photo"
                  src={image}
                  alt="Uploaded"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="photo__select">
                  <img src={logo} className="icon__photo" />
                </div>
              )}
            </div> */}
          </div>
        </div>
        <div className="column column__right">
          <div className="item">
            <img src={logo} className="icon__photo" />
          </div>
          <div className="item">
            <img src={logo} className="icon__photo" />
          </div>
        </div>
      </div>

{/*       <div className="row">
        <div className="item">
          <img src={logo} className="icon__photo" />
        </div>
        <div className="item">
          <img src={logo} className="icon__photo" />
        </div>
        <div className="item">
          <img src={logo} className="icon__photo" />
        </div>
      </div> */}

      {/*   <div className="photo__select">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />

        <div onClick={triggerFileUpload} className="photo__selecet">
          {image ? (
            <img
              className="photo"
              src={image}
              alt="Uploaded"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="photo__select">
              <img src={logo} className="icon__photo" />
            </div>
          )}
        </div>
      </div>

      <div className="photo2"></div>
      <div className="photo2"></div> */}
    </div>
  );
}

export default Photos;
