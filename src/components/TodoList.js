import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Todo from './Todo';

const GET_TODOS = gql`
  {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter @client
  }
`;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter:', filter);
  }
};

function TodoList() {
  return (
    <Query query={GET_TODOS}>
      {(props) => {
        const { data: { todos, visibilityFilter } } = props;
        return (
          <ul>
            {getVisibleTodos(todos, visibilityFilter).map(todo => (
              <Todo key={todo.id} {...todo} />
            ))}
          </ul>
        )
      }}
    </Query>
  );
}

export default TodoList;

