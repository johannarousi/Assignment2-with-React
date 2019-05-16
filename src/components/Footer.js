import React from "react";
import Tooltips from "./Tooltips";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-item about">
          <h6>ABOUT US</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos
            ipsa accusamus officia quibusdam?
          </p>
          <p>
            Street Name 123
            <br />
            Road Name
            <br />
            London
            <br />
            +44 74139 13807
          </p>
        </div>
        <div className="footer-item tweets">
          <h6>LATEST TWEETS</h6>
          <p>
            <strong>@Jaynesh</strong> Just submitted another great item on{" "}
            <strong>#themeforest</strong>{" "}
            <span style={{ fontSize: "8pt", color: "rgb(233, 231, 231)" }}>
              about 3 hours ago
            </span>
          </p>
          <p>
            <strong>@Jaynesh</strong> Working on an awesome theme for{" "}
            <strong>#themeforest</strong>{" "}
            <span style={{ fontSize: "8pt", color: "rgb(233, 231, 231)" }}>
              about three weeks ago
            </span>
          </p>
        </div>
        <div className="footer-item posts">
          <h6>LATEST POSTS</h6>
          <p className="posts-border">Lorem ipsum dolor sit amet consectetur</p>
          <p className="posts-border">
            <span style={{ fontStyle: "normal", color: "#458ed2" }}>
              lorem ipsum dolor sit amet
            </span>
          </p>
          <p className="posts-border">
            lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          </p>
          <p>lorem ipsum dolor sit amet</p>
        </div>
        <div className="footer-item flickr">
          <h6>FLICKR</h6>
          <div id="flickr-box-container">
            <div className="flickr-box" />
            <div className="flickr-box" />
            <div className="flickr-box" />
            <div className="flickr-box" />
            <div className="flickr-box" />
            <div className="flickr-box" />
            <div className="flickr-box" />
            <div className="flickr-box" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-div">
          <p>COPYRIGHT {"\u00A9"} 2003-2012 VENTUS INC. ALL RIGHTS RESERVED</p>

          <Tooltips />

          <div className="arrow">
            <a href="#top" className="arrow">
              <i className="fas fa-arrow-alt-circle-up" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
