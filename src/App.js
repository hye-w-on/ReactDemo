import React, { Component } from 'react';
import './App.css';
import TOC from "./component/TOC";
import Content from "./component/Content";



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
       mode:'welcome',
       subject:{title:'WEb', sub:'test'},
       mainsub:{title:'hell', sub:'go'},
       contents:[
         {id:1,title:'title1'},
         {id:2,title:'title2'},
         {id:3,title:'title3'}
       ]
    }
  }
  render(){
    return (
    <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
      <Subject title="WEb2" sub="test2"></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content></Content>
    </div>
    )
  }
}

class Subject extends Component{
  render(){
    return (
      <header>
        <h1><a href="/"></a>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
} 

export default App;
