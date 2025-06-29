import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../assets/API";
import { Link, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FaList } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import Actors from "../Actors";
import Videos from "../Videos";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MovieContext } from "../../context";
import "../../assets/styles/movieDetails.scss";

const MovieDetails = () => {
  let [details, setDetails] = useState({});
  let [modal, setModal] = useState(false);
  const { movieId } = useParams();
  const [firstVideo, setfirstVideo] = useState("");
  const { language, setLanguage } = useContext(MovieContext);
  const { favorite, setFavorite } = useContext(MovieContext);

  async function getDetails(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
    );
    let { data } = res;
    setDetails(data);
  }

  async function videos(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=${language}`
    );
    let { results } = res.data;
    setfirstVideo(results[0].key);
  }

  function hours(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    return `${hours} h ${minutes} min`;
  }

  const getColor = (value) => {
    if (value < 40) return "#e53935";
    if (value < 70) return "#1e88e5";
    return "#43a047";
  };

  function addToFavorite(item) {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    let result = [...res, item];
    localStorage.setItem("favorite", JSON.stringify(result));
    setFavorite(result);
  }

  useEffect(() => {
    window.scroll(0, 0);
    getDetails(api_key);
    videos(api_key);
  }, [movieId, language]);

  return (
    <>
      <div id="MovieDetails">
        <div
          id="details"
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(https://media.themoviedb.org/t/p/w1280${details.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="linear-gradient">
            <div className="container">
              <div className="details">
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${details.poster_path}`}
                  alt="img"
                />
                <div className="details--block">
                  <h5>
                    {details.title}{" "}
                    <span>({details.release_date?.slice(0, 4)})</span>
                  </h5>
                  <div className="details--block__text1">
                    <button>{details.origin_country}</button>
                    <h3>
                      {details.release_date}{" "}
                      <span>({details.original_language})</span>
                    </h3>
                    <ul>
                      <li>
                        <h3>
                          {details.genres?.map((el) => el.name).join(", ")}
                        </h3>
                      </li>
                    </ul>

                    <ul>
                      <li>{hours(details.runtime)}</li>
                    </ul>
                  </div>
                  <div className="details--block__text2">
                    <Box position="relative" display="inline-flex">
                      <CircularProgress
                        variant="determinate"
                        value={details.vote_average * 10}
                        size={40}
                        thickness={3}
                        style={{ color: getColor(details.vote_average * 10) }}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                      >
                        <strong style={{ color: "white" }}>
                          {Math.round(details.vote_average * 10)}%
                        </strong>
                      </Box>
                    </Box>
                    <h3>рейтинг</h3>
                    <div className="emotions-container">
                      <span className="emoji">🤢</span>
                      <span className="emoji">🤮</span>
                      <span className="emoji">😡</span>
                    </div>
                    <button>What's your Vibe ?</button>
                  </div>
                  <div className="details--block__icons">
                    <button>
                      <FaList />
                    </button>
                    <button>
                      <MdOutlineFavorite />
                    </button>
                    <button onClick={() => addToFavorite(details)}>
                      <CiBookmark />
                    </button>

                    <h4 onClick={() => setModal(true)}>
                      <span>
                        <FaPlay />
                      </span>
                      <span>Воспроизвести трейлер</span>
                    </h4>
                  </div>
                  {modal ? (
                    <div className="details--block__modal">
                      <a href="#" onClick={() => setModal(false)}>
                        <IoCloseCircleSharp />
                      </a>
                      <iframe
                        width="900"
                        height="500"
                        src={`https://www.youtube.com/embed/${firstVideo}`}
                        title="FS - 4 || movie details, actors, videos,"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  ) : null}
                  <i>
                    <p>"{details.tagline}"</p>
                  </i>
                  <div className="details--block__text3">
                    <h1>
                      Обзор <br /> <span>{details.overview}</span>
                    </h1>
                  </div>
                  <div className="details--block__text4">
                    <h1>
                      Mimi Cave <br /> <span>Director</span>
                    </h1>
                    <h1>
                      Andrew Sodroski <br /> <span>Writer</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Actors movieId={movieId} />
      <Videos videoId={movieId} />
    </>
  );
};

export default MovieDetails;
