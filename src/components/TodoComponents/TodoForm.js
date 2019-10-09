import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
      super()
      this.state = {
        value: ''
      }
    }
  
    handleChange =event=> {
      this.setState({
        value: event.target.value
      })
    }
  
    handleSubmit =event=> {
      event.preventDefault()
      this.props.addTodo(event, this.state.value)
      this.setState({
        value: ''
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
          <button type="button" onClick={e => this.props.deleteTodo(e)}>Clear Completed</button>
        </form>
      )
    }
  }
