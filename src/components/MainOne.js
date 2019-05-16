import React from "react";
import MainOneItem from "./MainOneItem";
import PropTypes from "prop-types";

function MainOne({ data }) {
  const mainOneTitlesComponent = data.map(obj => (
    <MainOneItem
      key={obj.title}
      title={obj.title}
      text={obj.text}
      icon={obj.icon}
    />
  ));
  return <div className="main1">{mainOneTitlesComponent}</div>;
}
MainOne.propTypes = {
  data: PropTypes.array.isRequired
};
// const mainOneTitles = [
//   {
//     title: "SUPERBLY RESPONSIVE",
//     text:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deserunt perferendis, vero aspernatur error ad eius accusamus, iure itaque maiores adipisci possimus, blanditiis tenetur.",
//     icon: "fas fa-mobile-alt"
//   },
//   {
//     title: "SQUEEKY CLEAN",
//     text:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deserunt perferendis, vero aspernatur error ad eius accusamus, iure itaque maiores adipisci possimus, blanditiis tenetur.",
//     icon: "fas fa-desktop"
//   },
//   {
//     title: "MULTI PURPOSE",
//     text:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deserunt perferendis, vero aspernatur error ad eius accusamus, iure itaque maiores adipisci possimus, blanditiis tenetur.",
//     icon: "fas fa-laptop"
//   },
//   {
//     title: "HIGHLY FLEXIBLE",
//     text:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deserunt perferendis, vero aspernatur error ad eius accusamus, iure itaque maiores adipisci possimus, blanditiis tenetur.",
//     icon: "fas fa-recycle"
//   }
// ];

export default MainOne;
