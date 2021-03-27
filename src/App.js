import './App.css';
import Header from './components/header'
import TheAppBar from './components/AppBar'
import nav from './assets/store.js'
import {Route, Switch} from "react-router-dom"
import DestinationDetails from './views/DestinationDetails'
import ExperienceDetails from './views/ExperienceDetails.js';
import Home from './views/home'

function App() {
  // For testing link clicks
  const onClick = (url) => {
    console.log("Clicked url: " + url);
  }



  return (
    <div className="App">
      <TheAppBar nav={nav} onClick={onClick} />
      <Header title="Where would you like to go?" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:destination">
          <DestinationDetails />
        </Route>
        <Route path="/:destination/:experience">
          <ExperienceDetails />
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
//<Route path="/:destination" children={<DestinationDetails />} />