// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
    handleButton = event =>{
        event.persist()
        setTimeout(()=>{
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButton}>delayed Button</button>
            </div>
        )
    }
}
export default DelayedButton