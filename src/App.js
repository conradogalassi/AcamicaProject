import React from 'react';
//import logo from './logo.svg';
//import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) =>{ 
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default App;
