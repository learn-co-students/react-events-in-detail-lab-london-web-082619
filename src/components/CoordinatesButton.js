// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
    handleButton = event =>{
        
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButton}>
                
                    Receive Coordinates Button
                </button>
            </div>
        )
    }
}
export default CoordinatesButton