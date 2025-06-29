import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { IoMdSearch } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import "../../assets/styles/Header.scss"
import { NavLink, useNavigate } from "react-router-dom";
import { MovieContext } from "../../context";

const Header = () => {
  let [inputValue, setInputValue] = useState("");
  let nav = useNavigate();
  let { dark, setDark } = useContext(MovieContext);
  let { language, setLanguage } = useContext(MovieContext);
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" />
          <div className="header--nav">
            <h4 onClick={() => setDark(!dark)}>
              <CgDarkMode />
            </h4>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/popular"}>Popular</NavLink>
            <NavLink to={"/toprated"}>toprated</NavLink>
            <NavLink to={"/basket"}>basket</NavLink>
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="ru-RU">RU</option>
              <option value="en-US">EN</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setInputValue(e.target.value)}
              onInput={(e) => nav(`/search/${e.target.value}`)}
              value={inputValue}
            />
            <h6
              onClick={() => {
                nav(`/search/${inputValue}`);
                setInputValue("");
              }}
            >
              <IoMdSearch />
            </h6>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
