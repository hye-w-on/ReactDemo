import React, { Component } from 'react';
import './App.css';
import TOC from "./component/TOC";
import Content from "./component/Content";
import Control from "./component/Control";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
       mode:'welcome',
       subject:{title:'WEb', sub:'test'},
       mainsub:{title:'hell', sub:'go'},
       contents:[
         {id:1,title:'title1',desc:'1'},
         {id:2,title:'title2',desc:'2'},
         {id:3,title:'title3',desc:'3'}
       ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.mainsub.title;
      _desc =this.state.mainsub.desc;
    }else if(this.state.mode === "read"){
       _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
    <div className="App">
      <Subject title={this.state.subject.title} sub={this.state.subject.sub}
      onChangePage={function(params) {
        alert("dd");
        this.setState({
          mode:'welcome'
        }); //함수안에서 this를 사용하기위해 .bind({오브젝트})를 사용  
      }.bind(this)}></Subject>
      <TOC data={this.state.contents}></TOC>
      <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
      <Content></Content>
    </div>
    )
  }
}

class Subject extends Component{
  render(){
    return (
      <header>
        <h1><a href="/" onClick={function(e){ 
            e.preventDefault();//이벤트의 기본적인 동작을 막음, 여기서는 페이지전환을 막음
            this.props.onChangePage();//이벤트 호출   
        }.bind(this)}>{this.props.title}</a></h1> 
        {this.props.sub}
      </header>
    );
  }
} 

export default App;
