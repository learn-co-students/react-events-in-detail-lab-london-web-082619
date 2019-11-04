// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    runOfEvents = (e) => {
        e.persist()
        setTimeout(
           () => this.props.onDelayedClick(e),
           this.props.delay
        )
    }

    render() {
        return (
            <button onClick= {e => this.runOfEvents(e)}/>
        )
    }

}

export default DelayedButton