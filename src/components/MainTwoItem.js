import React from "react";
import placeholder from "./img-placeholder.png";
import PropTypes from "prop-types";

function MainTwoItem(props) {
  return (
    <div>
      <img
        src={placeholder}
        alt="placeholder-envelop"
        className="placeholder-img"
      />
      <h4>{props.blogTitle}</h4>
      <p>{props.blogText}</p>
    </div>
  );
}

MainTwoItem.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogText: PropTypes.string.isRequired
};
export default MainTwoItem;
