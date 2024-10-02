// Mock de dados do usuário que viria do servidor
import React, { useState, useEffect } from "react";
import Info from "./info";
import Photos from "./photos";
import Segment from "../components/segment";

function ProfileConfig() {
  return (
    <div className="container__profile">
      <div className="header__profile">
        <div className="header__backbutton"></div>
        <div className="header__label">
          <p>PROFILE</p>
          <p className="p_config">Configuration</p>
        </div>
      </div>
      <div className="container__segment">
        <Segment />
      </div>
    </div>
  );
}

export default ProfileConfig;
