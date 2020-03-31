import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>

          <hr />
          <Route exact path="/" component={Root} />
          <Route path="/create" component={Create} />
          <Route path="/detail/:id" component={Detail} />



        </div>
      </Router>
    </div>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem('myDataID')
    }
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>

            <hr />
            <Route exact path="/" component={Root} />
            <Route path="/create" component={Create} />
            <Route path="/detail/:id" component={Detail} />



          </div>
        </Router>
      </div>
    );
  }
}

export default App;
