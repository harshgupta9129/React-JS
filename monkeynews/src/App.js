import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {

  state = {
    query:""
  }

  handleQuery = (searchText)=> {
    this.setState({
      query:searchText
    })
  }

  render() {
    return (
      <div>
        <Navbar handleQuery={this.handleQuery}/>
        <News query={this.state.query}/>
      </div>
    )
  }
}

