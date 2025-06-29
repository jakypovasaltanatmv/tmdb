import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../assets/API";
import MovieCard from "../MovieCard";
import { useParams } from "react-router-dom";

const Search = () => {
  let [search, setSearch] = useState([]);
  const { kinoId } = useParams();

  async function getSearch(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${kinoId}`
    );
    let { results } = res.data;
    setSearch(results);
    console.log(results);
  }

  useEffect(() => {
    getSearch(api_key);
  }, [kinoId]);

  return (
    <div id="Toprated">
      <div className="container">
        <div className="Toprated">
          {search.map((el) => (
            <MovieCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
