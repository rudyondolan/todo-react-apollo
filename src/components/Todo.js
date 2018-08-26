import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

function Todo(props) {
  const { id, completed, text } = props;
  return (
    <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
      {toggleTodo => (
        <li
          onClick={toggleTodo}
          style={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {text}
        </li>
      )}
    </Mutation>
  );
}

export default Todo;

