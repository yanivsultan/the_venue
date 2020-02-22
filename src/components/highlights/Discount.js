import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  constructor() {
    super();

    this.state = {
      discountStarts: 0,
      discountEnds: 30
    };
  }

  porcentage = () => {
    if (this.state.discountStarts < this.state.discountEnds) {
      this.setState({
        discountStarts: this.state.discountStarts + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 50);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.porcentage}>
            <div className="discount_porcentage">
              <span>{this.state.discountStarts}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets Before 20th June</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything{" "}
              </p>

              <MyButton
                text="Puchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com/"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
