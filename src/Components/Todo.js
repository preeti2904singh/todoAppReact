import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: "",
      todosList: ["one", "two"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit - this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    let tempTodo = JSON.parse(JSON.stringify(this.state.todosList));
    tempTodo.push(this.state.value);
    this.setState({
      todosList: tempTodo
    });
  }

  onCheckboxClick(value) {
    // var checkDeletObj = value.filter((item, index) => {
    //   return value.splice(index, 1);
    // })[0];
    let a = this.state.todosList.filter((item) => {
      return item !== value;
    });
    this.setState({
      todosList: a
    });
  };

  render() {
    return(
      <div>
        <input
          className="inputStyle"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter your Note here"
        />
        <input onClick={this.handleSubmit} type="submit" value="Submit" className="submitButton" />
        <div>
          {
            this.state.todosList.map((item, index) => {
                return <li key={index}><input type="checkbox" onClick={() => {
                  this.onCheckboxClick(item);
                }}/>{item}</li>;
            })
          }
        </div>
      </div>
    );
  }
}

export default Todo;
