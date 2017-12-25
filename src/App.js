import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from  './to_do';

class App extends Component {
    render() {

        return (
            <div id = "main">
                <Todo/>
            </div>
        )
    }


}

export default App;
