import React from 'react';

export default class ToDoInput extends React.Component {
    constructor(props) {
        super(props)
        // this.props = props
        this.submit = this.submit.bind(this)
    }
      
    submit()
    {
     this.props.addItem("gdg");
    }
    
    render() {
        debugger
        return (
            <div id='toDoInput'>
                <form ref= "form" onSubmit={this.submit}>
                <input type="text" value="add to do"/>
                    <button value="add">Add</button>
                </form>
            </div>
        )
    }
}