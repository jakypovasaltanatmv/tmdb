import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";

const getColor = (value) => {
  if (value < 40) return "#e53935";
  if (value < 70) return "#1e88e5";
  return "#43a047";
};

const MovieCard = ({ el }) => {
  return (
    <div className="Toprated--block" key={el.id}>
      <Link to={`/movieDetails/${el.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`}
          alt="img"
        />
      </Link>
      <div className="Toprated--block__text">
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
        <h2>{el.original_title}</h2>
        <h1>{el.release_date}</h1>
       
      </div>
    </div>
  );
};

export default MovieCard;
