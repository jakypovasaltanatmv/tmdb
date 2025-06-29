import React, { useEffect, useState } from "react";
import { MovieContext } from ".";

const RootContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [favorite, setFavorite] = useState([]);

  function getFavorite() {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(res);
  }

  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <MovieContext.Provider
      value={{
        language,
        dark,
        favorite,
        setFavorite,
        setDark,
        setLanguage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
