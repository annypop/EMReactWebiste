import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from "react";
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Service from './MyComponents/Service';
import Contact from './MyComponents/Contact';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import AreaGraph from './MyComponents/AreaGraph';
import {Redirect, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import LineGraph from './MyComponents/LineGraph';
import RadialGraph from './MyComponents/RadialGraph';
import CompareBarGraph from './MyComponents/CompareBarGraph';
import PieGraph from './MyComponents/PieGraph';



const App = () => {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} /> 
      <Route exact path="/service" component={Service} /> 
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/areagraph" component={AreaGraph}/>  
      <Route exact path="/linegraph" component={LineGraph}/> 
      <Route exact path="/radialgraph" component={RadialGraph}/>
      <Route exact path="/comparebargraph" component={CompareBarGraph}/>
      <Route exact path="/piegraph" component={PieGraph}/>
      <Redirect to="/"></Redirect>
    </Switch>
    <Footer/>
    </>
  )
}

export default App;
