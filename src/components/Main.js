import React from "react";
import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import MainThree from "./MainThree";
import BlueBanner from "./BlueBanner";
import { mainOneTitles, recentWork } from "../data";

class Main extends React.Component {
  state = {
    checked: true
  };
  render() {
    return (
      <main>
        <MainOne data={mainOneTitles} />
        <MainTwo data={recentWork} />
        <MainThree handleChange={this.handleChange} />
        <BlueBanner />
      </main>
    );
  }
}

export default Main;
