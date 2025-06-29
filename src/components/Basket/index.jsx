import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

const Basket = () => {
  const { favorite, setFavorite } = useContext(MovieContext);

  function delFav(item) {
    let res = favorite.filter((el) => {
      return el.id !== item;
    });
    localStorage.setItem("favorite", JSON.stringify(res));
    setFavorite(res);
  }

  const getColor = (value) => {
    if (value < 40) return "#e53935";
    if (value < 70) return "#1e88e5";
    return "#43a047";
  };
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {favorite.map((el) => (
            <div className="basket--block" key={el.id}>
              <Link to={`/movieDetails/${el.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                  alt="img"
                />
              </Link>
              <div className="basket--block__text">
                <h2>{el.original_title}</h2>
                <h3>
                  <Box position="relative" display="inline-flex">
                    <CircularProgress
                      variant="determinate"
                      value={el.vote_average * 10}
                      size={40}
                      thickness={3}
                      style={{ color: getColor(el.vote_average * 10) }}
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
                    >
                      <strong style={{ color: "#000" }}>
                        {Math.round(el.vote_average * 10)}%
                      </strong>
                    </Box>
                  </Box>
                </h3>
                <h1>{el.release_date}</h1>

                <p>{el.overview}</p>
                <h5 onClick={() => delFav(el.id)}>
                  <AiOutlineDelete />
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
