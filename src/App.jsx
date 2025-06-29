import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Toprated from "./components/Toprated";
import Hero from "./components/Hero";
import MovieDetails from "./components/movieDetails";
import ActorDetails from "./components/ActorDetails";
import Search from "./components/Search";
import { useContext } from "react";
import { MovieContext } from "./context";
import Basket from "./components/Basket";

function App() {
  const { dark, } = useContext(MovieContext);
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Hero />,
    },
    {
      id: 2,
      link: "/popular",
      element: <Popular />,
    },
    {
      id: 3,
      link: "/toprated",
      element: <Toprated />,
    },
    {
      id: 4,
      link: "/movieDetails/:movieId",
      element: <MovieDetails />,
    },
    {
      id: 5,
      link: "/actorDetails/:personId",
      element: <ActorDetails />,
    },
    {
      id: 6,
      link: "/search/:kinoId",
      element: <Search />,
    },
    {
      id: 7,
      link: "/basket",
      element: <Basket />,
    },
  ];


  



  return (
    <div
      className="app"
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black", 
      }}
    >
      <Header />
      <Routes>
        {routes.map((el) => {
          return <Route path={el.link} element={el.element} key={el.id} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
