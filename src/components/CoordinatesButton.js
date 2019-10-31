import React from 'react';

export default class CoordinatesButton extends React.Component{

    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    // the above function handles a click from the button below, has the event passed so that we can then access the X and Y coordinates, which are required as ONE argument (hence a single array but with both coords) for the props-passed 'onRecieveCoordinates' function from index.js
    render(){
        return(
            <button onClick={this.handleClick}>Coords Button Yo</button>
        )
    }
}