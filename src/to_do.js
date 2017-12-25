import React from 'react';
import ToDoHeader from './to_do_header';
import ToDoList from './to_do_list';
import ToDoInput from './to_do_input'
var todoItems = [];
todoItems.push({index : 1, value:'react', isDone: true});
todoItems.push({index : 2, value:'Gre book', isDone: false});
todoItems.push({index : 3, value:'cat', isDone: true});

export default class Todo extends React.Component {

    constructor(props){
        super(props);
        this.addItems = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this)
        this.state = {todoItems : todoItems}
    }
    addItem(item)
    {
        todoItems.unshift({
            index: todoItems.length + 1,
            value: item,
            isDone: false
        });
    }

    removeItem(itemIndex){
        todoItems.splice(itemIndex,1)
    }

    render() {
        return (
            <div id='todo'>
                <ToDoHeader/>
                <ToDoList items = {todoItems} removeItem = {this.removeItem()} addItem = {this.addItem()}></ToDoList>
                <ToDoInput items = {todoItems} removeItem = {this.removeItem()} addItem = {this.addItem()}/>
            </div>

        )
    }
}