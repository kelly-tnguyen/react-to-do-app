import React, { Component } from 'react';
import './App.css';
import { runInThisContext } from 'vm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
  }
}

handleUserInput=(e)=>{
  this.setState({inputValue: e.target.value})
}

handleSumbit=()=>{
  const newList = this.state.list;
  newList.push(this.state.inputValue);
  this.setState({list: newList, inputValue: ""})
}

renderList=()=>{
    return this.state.list.map((item)=>{
      return <p>{item}</p>
    })
  }


  render(){
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.inputValue}/>
        <button onClick={this.handleSumbit}>Add</button>
          {this.renderList()}
      </div>
    );
  }
}
  
export default App;
