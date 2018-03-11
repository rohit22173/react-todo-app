import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TextInput from './components/textInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        {id: 0, text: 'item0'},
        {id: 1, text: 'item1'},
        {id: 2, text: 'item2'}
      ],
      nextId: 3
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(todoText) {
    let todos = this.state.toDos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      toDos: todos,
      nextId: ++ this.state.nextId
    });
  }

  removeItem(id) {
    this.setState({
      toDos: this.state.toDos.filter((todo, index) => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
           <Header/>
            <TextInput todoText="" addItem={this.addItem}/>
            <ul>
              {
                this.state.toDos.map( (todo) => {
                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeItem = {this.removeItem} />
                })
              }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
