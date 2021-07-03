// import Navbar from './Navbar';
import Home from 'Home';
import Navbar from 'components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Create from './Create';
// import BlogDetails from './BlogDetails';
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;