import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../assets/API";
import user from "../../assets/images/eptyUser.png";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context";
import "../../assets/styles/Actors.scss";

const Actors = ({ movieId }) => {
  let [actor, setActor] = useState([]);
  let { language, setLanguage } = useContext(MovieContext);
  async function getActor(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}`
    );
    let { cast } = res.data;
    setActor(cast);
  }

  useEffect(() => {
    getActor(api_key);
  }, [language]);

  return (
    <div id="actors">
      <div className="container">
        <h1>В главных ролях</h1>
        <div className="actors">
          {actor.map((el) => (
            <div className="actors--info" key={el.id}>
              <Link to={`/actorDetails/${el.id}`}>
                <img
                  src={
                    el.profile_path
                      ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`
                      : user
                  }
                  alt={el.name}
                  width={200}
                />
              </Link>
              <h3>{el.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
