import React, { Component } from 'react'
import logo from './logo.svg'
import { ApolloProvider } from 'react-apollo'
import './App.css'
import Courses from './query'
import ApolloClient from 'apollo-boost'
const client = new ApolloClient({
  uri: 'https://everest.getproperly.io/api/graphql'
})

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ApolloProvider client={client}>
            <div>
              <h2>My first Apollo app</h2>
            </div>
            <Courses />
          </ApolloProvider>
          Learn React
        </header>
      </div>
    )
  }
}

export default App
