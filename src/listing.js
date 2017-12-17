import React from 'react';

export default class Listing extends React.Component {
    constructor(props) {
        super(props)
        this.done = this.done.bind(this)
        this.mark = this.mark.bind(this)
        this.state = {
            isDone : this.props.item.isDone
        }

    }

    done() {
        if (this.state.isDone)
            return "done";
        return "left"

    }

    mark() {
        this.setState({isDone:!this.state.isDone})
    }


    render() {

        return (
            <div id='listing'>
                <h1>
                    <button onClick={this.mark} value={this.props.item.isDone}>{this.done()}</button>
                    {this.props.index + 1} : {this.props.item.value}</h1>
            </div>
        )
    }
}