import { gql } from 'apollo-boost';

export const defaults = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
};

let nextTodoId = 0;

export const resolvers = {
  Mutation: {
    addTodo: (root, args, context, info) => {
      const query = gql`
        query GetTodos {
          todos @client {
            id
            text
            completed
          }
        }
      `;

      const previous = context.cache.readQuery({ query });
      const newTodo = {
        id: nextTodoId++,
        text: args.text,
        completed: false,
        __typename: 'TodoItem',
      };
      const data = {
        todos: previous.todos.concat([newTodo]),
      };
      context.cache.writeData({ data });
      return newTodo;
    },
    toggleTodo: (root, args, context, info) => {
      const id = `TodoItem:${args.id}`;
      const fragment = gql`
        fragment completeTodo on TodoItem {
          completed
        }
      `;
      const todo = context.cache.readFragment({ fragment, id });
      const data = { ...todo, completed: !todo.completed };
      context.cache.writeData({ id, data });
      return null;
    }
  }
}
