import React from 'react';
import './textInput.css';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: this.props.todoText};
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    addItem(text) {
        if (text.length > 0) {
            this.props.addItem(text);
            this.setState({value: ''});
        }
    }

    removeItem(id) {
        console.log('removing ', id);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={() => this.addItem(this.state.value)}>Add</button>
            </div>
        )
    }
}