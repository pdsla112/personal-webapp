import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import Ready from "./Ready";
import Projects from "./Projects";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/why-i-am-ready">
            <Ready/>
          </Route>
          <Route exact path="/personal-projects">
            <Projects/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;



// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
//
// export default App;
