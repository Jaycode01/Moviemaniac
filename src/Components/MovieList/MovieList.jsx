import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import Moviecard from "./Moviecard";
import FilterGroup from "./FilterGroup";
import Fire from "../../assets/fire.png";

const MovieList = ({ typeOf }) => {
  const [movie, setMovie] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [minRating, setminRating] = useState(0);
  const [sort, setsort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setfilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9af0baf565899921fb31c845cfd7c354"
    );

    const data = await response.json();
    setMovie(data.results);
    setfilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setminRating(0);
      setfilterMovies(movie);
    } else {
      setminRating(rate);

      const filtered = movie.filter((movie) => movie.vote_average >= rate);
      setfilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
