import React from "react";
import PropTypes from "prop-types";

function MainOneItem(props) {
  return (
    <div>
      <label className="icon">
        <i className={props.icon} />
      </label>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button className="button-main1">READ MORE</button>
    </div>
  );
}
MainOneItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default MainOneItem;
