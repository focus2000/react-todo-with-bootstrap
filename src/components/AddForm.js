import React, { Component } from 'react'

export class AddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    })


  }

  render() {
    return (
      <div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" name="title" className="form-control" placeholder="please enter your task" onChange={this.handleChange} value={this.state.title} />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success">Add</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddForm
