import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import MoviesScreen from "./screens/Movies/MoviesScreen";
import SeriesScreen from "./screens/Series/SeriesScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router>
        <Route basename="/" path="/" component={HomeScreen} />
        <Route exact path="/Movies" component={MoviesScreen} />
        <Route exact path="/Series" component={SeriesScreen} />
      </Router>
      <Footer />
    </>
  );
};

export default App;
