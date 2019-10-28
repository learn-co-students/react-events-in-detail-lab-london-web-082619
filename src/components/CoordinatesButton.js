// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    // constructor(props) {
    //     super()
    //     this.state = {
    //         key: this.props.attribute
    //     }
    // }

    handleClick = (event) => {
       let array = [];
        array.push(event.clientX);
        array.push(event.clientY);
        this.props.onReceiveCoordinates(array)
    }

    render() {

        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default CoordinatesButton;