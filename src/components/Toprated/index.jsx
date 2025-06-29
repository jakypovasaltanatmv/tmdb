import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../assets/API";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../context";
import loading from "../../assets/images/loading.svg";

const Toprated = () => {
  let [data, setData] = useState([]);
  let [count, setCount] = useState(1);
  let { language, } = useContext(MovieContext);
  async function getPopular(key, count) {
    let result = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${count}`
    );
    setData(result.data.results);
    console.log(result.data.results);
  }

  useEffect(() => {
    setTimeout(() => {
      getPopular(api_key, count);
    }, 1000);
  }, [count, language]);

  return (
    <section id="Toprated">
      <div className="container">
        <div className="Toprated">
          {data.length ? (
            data.map((el) => <MovieCard el={el} />)
          ) : (
            <img
              src={loading}
              alt=""
              style={{
                marginLeft: "40%",
              }}
            />
          )}
        </div>

        <center>
          <div
            className="pagination"
            style={{
              display: data.length ? "block" : "none",
            }}
          >
            <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
              back
            </button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>next</button>
          </div>
        </center>
      </div>
    </section>
  );
};

export default Toprated;
