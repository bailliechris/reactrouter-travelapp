import './App.css';
import Header from './components/header'
import TheAppBar from './components/AppBar'
import nav from './assets/store.js'
import {Route} from "react-router-dom"
import DestinationDetails from './views/DestinationDetails'
import {useState} from 'react'

function App() {
  const [url, setURL] = useState('');
  const onClick = (url) => {
    console.log(url);
    setURL(url);
  }

  return (
    <div className="App">
      <TheAppBar nav={nav} onClick={onClick}  />
      <Header title="Hello" />
      <Route path={`${url}`}>
        <DestinationDetails />
      </Route>

    </div>
  );
}

export default App;
