import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeItem(id) {
        this.props.removeItem(id);
    }

    render() {
        return (
            <div className="todoWrapper">
                <button className="removeItem" onClick={ (e) => this.removeItem(this.props.id)}>Remvoe</button>{this.props.todo.text}
            </div>
        );
    }
}