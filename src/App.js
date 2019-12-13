import React, { Component } from 'react'; //holds everything we need from react

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }


componentDidMount() {  //react puts our component on the page and calls block of code we have inside

fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())
.then(users => this.setState({monsters: users}));

}

handleChange = e => { 
  this.setState({ searchField: e.target.value});
};

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1> Monster Finder </h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}


export default App;
