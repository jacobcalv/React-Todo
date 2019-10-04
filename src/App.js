import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import data from './data'



class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      todos: data
    }
    console.log(this.state.todos)
  }

 toggleTodo = (event, itemId) => {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.map(item => {
        
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,

          }
        } else {
          return item
        }
      })
    })
  }

  addTodo = (event, itemName) => {
    event.preventDefault()
    const newTodo = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [newTodo, ...this.state.todos]
    })
  }

  deleteTodo = event => {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} addTodo={this.addTodo} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;