import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import Movies from "./screens/Movies/Movies";
import Series from "./screens/Series/Series";
import Header from './components/Header'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
        <Route path="/Series" component={Series} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
