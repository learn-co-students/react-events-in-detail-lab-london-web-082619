// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    handleClick =(event) => {
        event.persist()
        console.log(event)
        setTimeout(()=> {this.props.onDelayedClick(event)}, this.props.delay)
        // console.log(this.props.delay)
        console.log(this.props.onDelayedClick(event))
    }

    render () {
        return  (
            <button onClick={this.handleClick}/>
        )
    }
}

export default DelayedButton