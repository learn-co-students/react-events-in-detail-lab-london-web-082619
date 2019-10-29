// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component{

    coordinates = event  => {
       this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return(
            <button onClick = {this.coordinates}></button>
        )
    }

}