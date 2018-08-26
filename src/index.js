import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import { defaults, resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const cache = new InMemoryCache();
const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers,
    typeDefs
  },
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
