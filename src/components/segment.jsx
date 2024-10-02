import React, { useState } from "react";

import Info from "../pages/info";
import Photos from "../pages/photos";
import Preference from "../pages/preference";


function Segment() {
  const [activeSegment, setActiveSegment] = useState("info");

  const renderPage = () => {
    switch (activeSegment) {
      case "preference":
        return <Preference />;
      case "photos":
        return <Photos />;
      case "info":
        return <Info />;
    }
  };
  return (
    <div className="content">
      <div className="container__segment">
        <button onClick={() => setActiveSegment("info")} >INFO</button>
        <button onClick={() => setActiveSegment("photos")}>PHOTO</button>
        <button onClick={() => setActiveSegment("preference")}>
          PREFERENCE
        </button>
      </div>
      <div>{renderPage()}</div>
    </div>
  );
}

export default Segment;
