import React from "react";
import { Route, Switch,  Router} from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./navBar";
import history from './history'

class App extends React.Component {
    render(){
        return (
          
            <Router history={history}>
                <div className="container">
                  <Header />
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact  path="/about" component={About}/>
                      <Route exact path="/contact" component={Contact}/>
                  </Switch>
                </div>
                </Router> 
                
            
          );

    }
    
  };
export default App;

    
    
    