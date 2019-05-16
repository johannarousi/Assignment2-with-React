import React from "react";
import headerimg from "./Header-img.png";
import borderimg from "./Border-BG.jpg";

function Header() {
  return (
    <header style={borderImageHeader}>
      <div className="header-div">
        <div className="header-content">
          <div className="image-div">
            <img src={headerimg} alt="devices" className="image-header" />
          </div>
          <div className="title-div">
            <h1>
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                POWERFULLY SIMPLE
              </span>{" "}
              <span style={{ color: "gray" }}>WITH A</span>{" "}
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                SQEEKY CLEAN
              </span>{" "}
              <span style={{ color: "gray" }}>DESIGN.</span>
            </h1>
            <p>
              Find out how you can offer quick and powerful solutions to your
              customers now!
            </p>
            <br />
            <button href="#" className="button-header">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="blue-banner">
          <h2>
            CREATE A{" "}
            <span style={{ fontStyle: "oblique", fontWeight: "bolder" }}>
              POWERFUL
            </span>{" "}
            SOLUTION NOW!
          </h2>
          <button className="button-blue-banner">GET STARTED</button>
        </div>
      </div>
    </header>
  );
}
const borderImageHeader = {
  borderBottom: "12px solid transparent",
  borderImage: `url(${borderimg}) 50 repeat`
};
export default Header;
