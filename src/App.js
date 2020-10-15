import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import SpaceRocketCards from './components/Layout/SpaceRocketCards';

function App() {
  
  return (
    
      <div className="App">
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SpaceRocketCards}/>
            <Route exact path='/launchSuccess/:launch_success'  component={SpaceRocketCards}/>
            <Route exact path='/launchSuccess/landingSuccess/:launch_success/:land_success' component={SpaceRocketCards}/>
            <Route exact path='/launchSuccess/landingSuccess/year/:launch_success/:land_success/:launch_year' component={SpaceRocketCards} />
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
