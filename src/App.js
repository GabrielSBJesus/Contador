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

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           {eu}
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

export default App;
