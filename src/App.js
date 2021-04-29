import './stylesheets/App.css';
import Home from  './pages/home.js';
import NavBar from  './containers/navbar.js';


function App() {
  return (
    <div className="App">
      < NavBar />
      < Home />
    </div>
  );
}

export default App;
