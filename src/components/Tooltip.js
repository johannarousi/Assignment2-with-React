import React from "react";
import PropTypes from "prop-types";

function Tooltip(props) {
  return (
    <div className="tooltip">
      <a href={props.address}>
        <i className={props.icon} />
      </a>
      <span className="tooltiptext">{props.title}</span>
    </div>
  );
}
Tooltip.propTypes = {
  address: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default Tooltip;
