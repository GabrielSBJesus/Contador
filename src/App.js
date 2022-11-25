import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
      counter: 0,
    };
    timeOutUpdate = null;


    handleTimeOut = () => {
      const {counter} = this.state;

      this.timeOutUpdate = setTimeout(() => {
        this.setState({counter: counter + 1})
      }, 1000)
    }

    componentDidMount() {
      this.handleTimeOut()
    }

    componentDidUpdate() {
      this.handleTimeOut()
    }

    componentWillUnmount() {
      clearTimeout(this.timeOutUpdate)
    }


  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <p className="number">{counter}</p>  
      </div>
    );
  }
}

export default App;
