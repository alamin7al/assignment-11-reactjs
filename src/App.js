import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './Components/Homefoulder/Header';
import Home from './Components/Homefoulder/Home';
import Login from './Components/Firebase/Login';
import AuthProvider from './Components/Firebase/AuthProvider';
import Details from './Components/Homefoulder/Details'
import Privateroute from './Components/Firebase/Privateroute';
import Travels from './Components/Travel/Travels';
import MYorder from './Components/Homefoulder/MYorder';
import Addevents from './Components/Homefoulder/Addevents';
import Footer from './Components/Homefoulder/Footer';
import Detailstc from './Components/Homefoulder/Detailstc';
// import Carousal from './Components/Homefoulder/Carousal';
const App = () => {
  return (
    <div className='App'>

      <AuthProvider>
        <Router>
         
          <Header></Header>
          
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            
            <Route exact path='/travel'>
              <Travels></Travels>
            </Route>
            <Route exact path='/order'>
              <MYorder></MYorder>
            </Route>
            <Route exact path='/events'>
              <Addevents></Addevents>
            </Route>
            <Privateroute exact path='/details/:id'>
             <Details></Details>
            </Privateroute>
            {/* <Privateroute exact path='/details/:id'>
             <Detailstc></Detailstc>
            </Privateroute> */}
            {/* <Route exact path='/details'>
             <Details></Details>
            </Route> */}
            <Route exact path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;