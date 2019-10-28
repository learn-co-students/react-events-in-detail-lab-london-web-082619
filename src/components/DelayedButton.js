import React, {Component} from 'react';

export default class DelayedBytton extends Component {

    delayOnClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event), this.props.delay
        })
    }

    render(){
        return(
            <button onClick={this.delayOnClick}>DelayedButton</button>
        )
    }

}