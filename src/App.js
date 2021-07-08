import Home from 'view/Home';
import Navbar from 'components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from 'view/Create';
import ProfileDetail from 'view/ProfileDetail';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/view/:id">
              <ProfileDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
