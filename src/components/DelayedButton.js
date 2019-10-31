import React from 'react';

export default class DelayedButton extends React.Component{

    handleClick = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay)
    }

    // in the above callback you are taking the event and persisting it (since the event data will only exist while the callback is active). Then calling the setTimeout function and the first argument is an anonymous function. The code body of the function is the onDelayedClick function defined and passed as a prop via index.js. If you look at where that is defined, in index.js, you can see it will console.log the event - the event is passed as argument. So within the above function we pass the event as an argument first to the handleClick function and then into the this.props.onDelayedCLick() function. The second argument of a setTimeout function is always the interval, in this case a delay since it will just run once(console.log once) and since that value (1500) is passed as a second prop from index.js. 
    render(){
        return(
            <button onClick={this.handleClick}>Delayed Button</button>
        )
    }
}
