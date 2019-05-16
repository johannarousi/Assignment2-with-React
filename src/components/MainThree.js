import React, { Component } from "react";
import borderimg from "./Border-BG.jpg";

export class MainThree extends Component {
  state = {
    selected: "checkbox1"
  };
  handleChange = e => {
    this.setState({
      selected: e.target.id
    });
  };
  render() {
    return (
      <div className="main3">
        <div className="fieldset1">
          <fieldset style={borderImageMain}>
            <legend>TESTIMONIALS</legend>

            <div className="testimonials">
              <div className="testimonials-div">
                <h5>John Smith1</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  sequi aperiam corrupti mollitia! Accusantium, laudantium
                  incidunt amet corporis officiis commodi dolore quae.
                </p>
              </div>
              <div className="testimonials-div">
                <h5>John Smith2</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  sequi aperiam corrupti mollitia! Accusantium, laudantium
                  incidunt amet corporis officiis commodi dolore quae.
                </p>
              </div>

              <div className="testimonials-div">
                <h5>John Smith3</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  sequi aperiam corrupti mollitia! Accusantium, laudantium
                  incidunt amet corporis officiis commodi dolore quae.
                </p>
              </div>
              <div className="testimonials-div">
                <h5>John Smith4</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  sequi aperiam corrupti mollitia! Accusantium, laudantium
                  incidunt amet corporis officiis commodi dolore quae.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="fieldset2">
          <fieldset style={borderImageMain}>
            <legend>DEVELOPMENT</legend>

            <div className="tabs">
              <div className="tab">
                <input
                  name="checkbox-tabs-group"
                  type="radio"
                  id="checkbox1"
                  className="checkboxtab"
                  checked={this.state.selected === "checkbox1"}
                  onChange={this.handleChange}
                />
                <label htmlFor="checkbox1">DESIGN</label>
                <div className="content">
                  <h5>The Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro sequi aperiam corrupti mollitia! Accusantium,
                    laudantium incidunt amet corporis officiis commodi dolore
                    quae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro sequi aperiam corrupti mollitia! Accusantium,
                    laudantium incidunt amet corporis officiis commodi dolore
                    quae.
                  </p>
                  <button className="button-design">READ MORE</button>
                </div>
              </div>

              <div className="tab">
                <input
                  name="checkbox-tabs-group"
                  type="radio"
                  id="checkbox2"
                  className="checkboxtab"
                  checked={this.state.selected === "checkbox2"}
                  onChange={this.handleChange}
                />
                <label htmlFor="checkbox2">PRODUCTION</label>
                <div className="content">
                  <h5>The Production</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    explicabo unde enim doloremque cupiditate, totam, facere ex
                    dolores nostrum harum asperiores soluta?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem totam quaerat quis ducimus autem voluptatem cumque
                    inventore. Aliquid fuga sit eos. Fugiat.
                  </p>
                  <button className="button-design">READ MORE</button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

const borderImageMain = {
  borderTop: "12px solid transparent",
  borderImage: `url(${borderimg}) 50 repeat`
};
export default MainThree;
