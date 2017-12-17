import React from 'react';
import Listing from './listing';

export default class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.items = this.props.items;
    }
    render() {
        var items = this.items.map((item,index) =>  { return <Listing index={index} item={item}/> } )
        return (
            <div id='toDoList'>
                {items}
            </div>
        )
    }
}