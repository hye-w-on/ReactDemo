import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
    <div className="App">
      <Subject></Subject>
      <TOC></TOC>
      <Content></Content>
    </div>
    )
  }
}

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>TEST</h1>
      </header>
    );
  }
} 

class TOC extends Component{
  render(){
    return (
      <nav>
        <ul>
          <li><a>html</a></li>
        </ul>
        </nav>
    );
  }
} 

class Content extends Component{
  render(){
    return (
      <article>
        <h2>html</h2>
      </article>
    );
  }
} 

export default App;
