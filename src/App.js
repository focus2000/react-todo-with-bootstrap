import React, { Component } from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import AddForm from './components/AddForm'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res =>
        this.setState({
          todos: res.data.slice(0, 5)
        })
      )
  }

  deleTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos ${id}`)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo =>
            todo.id !== id
          )]
        })
      )
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res =>
        this.setState({
          todos: [this.state.todos, res.data]
        })
      )
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-4 text-danger text-center">Todos App</h1>
            <AddForm addTodo={this.addTodo} />

            <Todos todos={this.state.todos} deleTodo={this.deleTodo} />

          </div>
        </div>
      </div>
    )
  }
}

export default App
