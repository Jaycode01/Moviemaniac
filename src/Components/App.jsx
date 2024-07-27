import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import MovieList from "./MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MovieList />
    </div>
  );
};

export default App;
