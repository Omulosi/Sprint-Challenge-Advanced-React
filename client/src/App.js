import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';

import PlayerTable from './components/PlayerTable/PlayerTable';
import DarkMode from './components/DarkMode';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players/')
      .then(response => response.data)
      .then(data => {
        this.setState({data: data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Women's world cup player search stats</h1>
          <DarkMode />
        </header>

        <section className="main-content">
          <PlayerTable playerData={this.state.data}/>
        </section>
      </div>
    );
  }
}

export default App;
