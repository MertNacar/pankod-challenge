import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import MoviesScreen from "./screens/Movies/MoviesScreen";
import SeriesScreen from "./screens/Series/SeriesScreen";
import Header from './components/Header'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/Movies" component={MoviesScreen} />
        <Route path="/Series" component={SeriesScreen} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
