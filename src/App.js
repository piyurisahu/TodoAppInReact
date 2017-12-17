import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from  './to_do';

class App extends Component {
    render() {
        var todoItems = [];
        todoItems.push({index : 1, value:'react', isDone: true});
        todoItems.push({index : 2, value:'Gre book', isDone: false});
        todoItems.push({index : 3, value:'cat', isDone: true});
        var test = "hi i am testing"
        return (
            <div id = "main">
                <h1>Hi debugger</h1>
                <Todo initItems={todoItems}/>
            </div>
        )
    }


}

export default App;
