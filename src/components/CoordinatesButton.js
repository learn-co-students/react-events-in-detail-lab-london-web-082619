// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        const coordsArray = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(coordsArray);
    }

    render(){
        return (
            <button
            onClick={this.handleClick}
            >Get Coordinates</button>
        )
    }

}