import React from "react";
import Search from "../components/Search";
import MoviesList from "../components/MoviesList";

const Home = () => {
  return (
    <>
      {/* Search */}
      <Search />
      {/* Movies List */}
      <MoviesList />
    </>
  );
};

export default Home;
