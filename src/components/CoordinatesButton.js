import React, { Component } from "react";

class CoordinatesButton extends Component {

  render() {
    return(
      <button onClick={this.getCoordinatesFromClickEvent} />
    );
  }

  getCoordinatesFromClickEvent = (event) => {
    const coordinates = [ event.clientX, event.clientY ];
    this.props.onReceiveCoordinates(coordinates);
  }

}

export default CoordinatesButton;