import React, { useEffect, useState } from "react";
import { api_key } from "../../assets/API";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState({});

  async function getDetails(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
    );
    const random = Math.floor(Math.random() * res.data.results.length);
    setMovie(res.data.results[random]);
  }

  useEffect(() => {
    getDetails(api_key);
  }, []);

  return (
    <div
      id="hero"
      style={{
        width: "100%",
        height: "370px",
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="hero">
          <h1>
            Добро пожаловать. <br />
            <span>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</span>
          </h1>

          <div className="hero--input">
            <input
              type="text"
              placeholder="найти фильм, сериал, персону....."
            />
            <button>Поиск</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
