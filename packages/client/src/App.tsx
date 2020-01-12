import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Chat from './components/ChatBody/Chat'
const client = new ApolloClient({
  uri: "http://localhost:4000"
});


const App = () => {
  return (
    <ApolloProvider client={client}>
  
      <Chat/>
    </ApolloProvider>
  );
};

export default App;

