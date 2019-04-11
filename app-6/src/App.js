import React, { Component } from "react";
import Todo from './components/todo/todo'
import "./App.css";

class App extends Component {

  constructor(){
    super();

    this.state = {
      input: '',
      list: []
    }

    this.handleClickChange = this.handleClickChange.bind( this )
    
  }

  handleChange(val){
    this.setState({ input: val })
  }

  handleClickChange(){
    if (this.state.input === '') {
      window.alert('Please enter a task')
    } else {
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ''
      })
    }
  }

  
  
  
  render() {
    let todo = this.state.list.map((e, i) => {
      return <Todo key={i} task={e} />
    })
   
    return (
      
      <div className="App">
        <div className='container'>
          <h1>Brock's To-do List</h1>
          <div className='input'>
            <input 
              placeholder='Add new task'
              onChange={ e => this.handleChange( e.target.value ) }
              value={ this.state.input }
            />
            <button onClick={ this.handleClickChange }> Add </button>
          </div>
          {todo}
        </div>
      </div>
    );
  }
}

export default App;
