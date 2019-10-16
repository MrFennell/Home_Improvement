import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.svg";
import axios from 'axios';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
          todos: [],
      }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/todos/')
    .then(response => {
        this.setState({ todos: response.data });
    })
    .catch(function(error){
        console.log(error);
    })
  }

  reRender(){
    axios.get('http://localhost:8000/todos/')
    .then(response => {
        this.setState({ todos: response.data });
    })
    .catch(function(error){
        console.log(error);
    })
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" >
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact render={(props) => 
            <TodosList {...props} 
              todos={this.state.todos} 
              onSubmit={this.reRender()}
            />}/>
          <Route path="/edit/:id" component={EditTodo}  />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;