
import React, { Component } from 'react';

class TOC extends Component{
    render(){
      var list = [];
      var data = this.props.data;
      var i = 0;
      console.log("data.langth"+data.length);
      while(i < data.length){
        list.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
          //이때 식별자로 key를 필수로 작성해야한다 react
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {list}
          </ul>
          </nav>
      );
    }
  } 
  
  export default TOC;