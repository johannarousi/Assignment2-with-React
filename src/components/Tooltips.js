import React from "react";
import Tooltip from "./Tooltip";
function Tooltips() {
  const tooltipComponent = footerIconTooltips.map(tooltip => (
    <Tooltip
      key={tooltip.title}
      address={tooltip.address}
      title={tooltip.title}
      icon={tooltip.icon}
    />
  ));
  return <div className="social-media-icons">{tooltipComponent}</div>;
}

const footerIconTooltips = [
  {
    address: "https://twitter.com/",
    title: "Twitter",
    icon: "fab fa-twitter-square"
  },
  {
    address: "https://facebook.com/",
    title: "Facebook",
    icon: "fab fa-facebook-square"
  },
  {
    address: "https://vimeo.com/",
    title: "Vimeo",
    icon: "fab fa-vimeo-square"
  },
  {
    address: "https://youtube.com/",
    title: "Youtube",
    icon: "fab fa-youtube-square"
  },
  {
    address: "https://plus.google.com/",
    title: "Google+",
    icon: "fab fa-google-plus-square"
  },
  {
    address: "https://pinterest.com/",
    title: "Pinterest",
    icon: "fab fa-pinterest-square"
  }
];
export default Tooltips;
