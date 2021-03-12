import './App.css';
import Header from './components/header'
import TheAppBar from './components/AppBar'
import nav from './assets/storetest.js'
import {Route, Switch} from "react-router-dom"
import DestinationDetails from './views/DestinationDetails'

function App() {
  // For testing link clicks
  const onClick = (url) => {
    console.log("Clicked url: " + url);
  }

  return (
    <div className="App">
      <TheAppBar nav={nav} onClick={onClick}  />
      <Header title="Header Text" />
      <Switch>
        <Route path="/:destination" children={<DestinationDetails />} />
      </Switch>
    </div>
  );
}

export default App;
