import React, { Component } from 'react';
import './App.css';
// import { runInThisContext } from 'vm';

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
      return <li>{item}
       </li>
    })
  }


  render(){
    return (
      <div>
        <h1>To-Do List</h1>
        <input 
        type="text" 
        onChange={this.handleUserInput} 
        value={this.state.inputValue}/>

        <button 
        onClick={this.handleSumbit}>Add
        </button>
        
        {this.renderList()}

      </div>
    );
  }
}
  
export default App;