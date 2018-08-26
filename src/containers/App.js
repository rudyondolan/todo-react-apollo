import React, { Component } from 'react';
import Footer from '../components/Footer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TodoForm />
        <TodoList />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
