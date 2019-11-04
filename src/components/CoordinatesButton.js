// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {



    mouseCoordinates = (e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        const position = [clientX: e.clientX, clientY: e.clientY]
        return this.props.onReceiveCoordinates(position)
    }

    render() {
        return (
            <button onClick= {e => this.mouseCoordinates(e)}/>
        )
    }

}

export default CoordinatesButton