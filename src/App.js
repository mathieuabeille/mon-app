import './stylesheets/App.css';
import Home from  './pages/home.js';
import Growth from  './pages/growth.js';
import NavBar from  './containers/navbar.js';
import { BrowserRouter, Route,  Redirect, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/growth" component={Growth}/>
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
