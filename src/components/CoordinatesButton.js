// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {



handleClick = (event) => {
    const target = event.target
    console.log(target)
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
}

    render() {
        console.log(this.props)
        return (
            <button onClick={this.handleClick}>Cordinate</button>

        )
    }
}

export default CoordinatesButton