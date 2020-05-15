import React, { Component } from 'react'

export class Todos extends Component {

  render() {
    const { todos, deleTodo, id } = this.props

    return (
      <div >
        {
          todos.length ? (
            todos.map(todo => {
              return <ul className="list-group" key={todo.id} >
                <li className="list-group-item">
                  {todo.title}
                  <button className="btn btn-sm btn-outline-danger float-right" onClick={() => { this.props.deleTodo(id) }}>Delete</button>

                </li>

              </ul>
            })
          ) : (
              <p className="text-center">No todo Left!!</p>
            )
        }

      </div>
    )
  }

}


export default Todos
