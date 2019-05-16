import React from "react";
import MainTwoItem from "./MainTwoItem";
import borderimg from "./Border-BG.jpg";
import PropTypes from "prop-types";

function MainTwo({ data }) {
  let count = 0;
  const mainTwoTitlesComponent = data.map(obj => {
    return (
      <MainTwoItem
        key={(count += 1)}
        blogTitle={obj.blogTitle}
        blogText={obj.blogText}
      />
    );
  });
  return (
    <div>
      <fieldset style={borderImageMain}>
        <legend>RECENT WORK</legend>
      </fieldset>
      <div className="main2">{mainTwoTitlesComponent}</div>
    </div>
  );
}

const borderImageMain = {
  borderTop: "12px solid transparent",
  borderImage: `url(${borderimg}) 50 repeat`
};
MainTwo.propTypes = {
  data: PropTypes.array.isRequired
};
export default MainTwo;
