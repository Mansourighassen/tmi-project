import './App.css';
import Nav from './Components/Common/Nav'
import Footer from './Components/Common/Footer'
import Home from './Components/Pages/Home/Home'
import Candidature from './Components/Pages/Candidature'
import EspaceClient from './Components/Pages/EspaceClient'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div class="app">
    
        <Router>
  <div>
  <Nav/>
 
        <Switch>
          <Route path="/candidature">
            <Candidature />
          </Route>
          <Route path="/Espace-client">
            <EspaceClient />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>


</div>
  );
}

export default App;
