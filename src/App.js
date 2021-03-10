import './App.css';
import Header from './components/header'
import TheAppBar from './components/AppBar'
import nav from './assets/nav.js'

function App() {
  const onClick = (id) => {
    console.log(id);
  }

  return (
    <div className="App">
      <TheAppBar nav={nav} onClick={onClick}  />
      <Header title="Hello" />
    </div>
  );
}

export default App;
