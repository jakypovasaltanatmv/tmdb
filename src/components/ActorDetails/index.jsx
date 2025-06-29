import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../assets/API";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../context";
import "../../assets/styles/ActorDetails.scss";

const ActorDetails = () => {
  const [actorDetails, setActorDetails] = useState({});
  const { personId } = useParams();
  const [textLength, setTextLength] = useState(false);
  const {language, setLanguage} = useContext(MovieContext)

  async function getActors(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`
    );
    let { data } = res;
    setActorDetails(data);
    console.log(data);
  }

  const { name, profile_path, biography, also_known_as } = actorDetails;

  useEffect(() => {
    getActors(api_key);
  }, [language]);
  return (
    <div id="actorDetails">
      <div className="container">
        <div className="actorDetails">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${profile_path}`}
            alt="img"
            width={400}
          />
          <div className="actorDetails--text">
            <h1>{name}</h1>
            {
              <p>
                Биография
                {biography?.slice(0, textLength ? biography.length : 400)}
                <a href="#" onClick={() => setTextLength(!textLength)}>
                  {textLength ? "скрыть" : "читать дальше..."}
                </a>
              </p>
            }
            <h3>{also_known_as}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
