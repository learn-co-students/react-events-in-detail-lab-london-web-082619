import React from 'react'

export default class CoordinatesButton extends React.Component {
    
    createArray = (event) => {
        const newArr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(newArr)
    }

    render() {
        return (
            <button onClick={this.createArray}>Hole</button>
        )
    }
}
