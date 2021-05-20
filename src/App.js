import  React from 'react';
import './App.css';

import NavBar from './Components/NavBar/NavBar'
import Login from './Components/Login/Login'
import Mediaplayer from './Components/MediaPlayer/Mediaplayer';
import Body from './Components/Body/Body'
import Home from './Components/Home/Home'
import Hablemos from './Components/Hablemos/Hablemos'
import Productos from './Components/Productos/Productos'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      login: true,
      navegation: "Home"
      };

    this.handleLogin = this.handleLogin.bind(this);
 
  }
  
  handleLogin(loginValidated) {
    let loginResolution = loginValidated;
    this.setState({login: loginResolution})
  }


  render(){
    if(this.state.login == false){
     return <Login  handleLogin={this.handleLogin}/>
    } else {
      return (
        <div >
          <NavBar/>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>           
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/productos">
                <Productos/>
              </Route>
              <Route path="/empresa">
              </Route>
              <Route path="/hablemos">
                <Hablemos/>
              </Route>
            </Switch>
          </Router>
        </div>
        );
    }
}
}

export default App;
