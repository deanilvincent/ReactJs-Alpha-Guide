import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// ### Default

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// ### Basic Conditioning

// class App extends Component{
//   render(){
//     var number = 2;
//     return(
//       <h2>{number == 2 ? 'True' : 'False'}</h2>
//     )
//   }
// }

// export default App;

// ### with Simple Style

// class App extends Component{
//   render(){
//     var myStyle = {
//       fontSize: 332,
//       color: "black"
//     }

//     return(
//       <div style={myStyle}>Hello</div>
//     )
//   }
// }

// export default App;

// ### Separate Local Component

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

class Header extends Component{
  render(){
    return(
      <h1>Header Name</h1>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <p>I am a content</p>
    )
  }
}

export default App;