import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Link from './Link';

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

function FilterLink(props) {
  const { filter, children } = props;
  return (
    <Query query={GET_VISIBILITY_FILTER}>
      {(props) => {
        const { data, client } = props;
        return (
          <Link
            onClick={() => client.writeData({ data: { visibilityFilter: filter } })}
            active={data.visibilityFilter === filter}
          >
            {children}
          </Link>
        );
      }}
    </Query>
  );
}

function Footer() {
  return (
    <p>
      Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
}

export default Footer;

