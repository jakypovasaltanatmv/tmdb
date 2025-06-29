import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../assets/API";
import { MovieContext } from "../../context";

const Videos = ({ videoId }) => {
  let [video, setVideo] = useState([]);
  let [count, setCount] = useState(4);
  let {language, setLanguage} = useContext(MovieContext)
  async function videos(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${key}&language=${language}`
    );
    let { results } = res.data;
    setVideo(results);
    console.log(results);
  }

  useEffect(() => {
    videos(api_key);
  }, [language]);
  return (
    <div id="videos">
      <div className="container">
        <div className="videos">
          {video.slice(0, count).map((el) => (
            <div className="videos--block">
              <iframe
                width="280"
                height="170"
                src={`https://www.youtube.com/embed/${el.key}`}
                title={el.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullscreen
              ></iframe>
            </div>
          ))}
        </div>
        <center>
          {video.length >= count ? (
            <button
              onClick={() =>
                video.length > count ? setCount(count + 4) : setCount(4)
              }
            >
              {video.length > count ? "  More..." : "Close"}
            </button>
          ) : null}
        </center>
      </div>
    </div>
  );
};

export default Videos;
