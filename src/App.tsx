import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import MoviesScreen from "./screens/Movies/MoviesScreen";
import SeriesScreen from "./screens/Series/SeriesScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="wrap">
          <Header />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/Movies" component={MoviesScreen} />
          <Route path="/Series" component={SeriesScreen} />
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
