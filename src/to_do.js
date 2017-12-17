import React from 'react';
import ToDoHeader from './to_do_header';
import ToDoList from './to_do_list';
import ToDoInput from './to_do_input'
export default class Todo extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='todo'>
                <ToDoHeader/>
                <ToDoList items = {this.props.initItems}></ToDoList>
                <ToDoInput/>

            </div>

        )
    }
}