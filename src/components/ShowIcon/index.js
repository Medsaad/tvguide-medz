import React, { Component } from "react";
import ShowIcoSrc from "../../assets/baseline-theaters-24px.svg";

class ShowIcon extends Component {
  render() {
    return (
      <div className="showimage">
        <img src={ShowIcoSrc} />
      </div>
    );
  }
}

export default ShowIcon;
