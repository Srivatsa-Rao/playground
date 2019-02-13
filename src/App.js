import React, { Component } from 'react'
import logo from './logo.svg'
import { ApolloProvider } from 'react-apollo'
import './App.css'
import Courses from './query'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-boost'

const httpLink = createHttpLink({
  uri: 'https://everest.getproperly.io/api/graphql/'
})
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'x-parse-session-token': 'r:yexpJckGKPVMNaCIObeYNip9rnygPTiQ'
  }
}))

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
              <h2>asdasd app</h2>
            </div>
            <Courses />
          </ApolloProvider>
          Apollo app
        </header>
      </div>
    )
  }
}

export default App
