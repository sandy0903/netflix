import React from "react";
import Movies from "../components/Movies";
import logo from "../images/netflix_PNG32.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between h-[90px]  ">
        <div className="w-[130px] sm:w-[200px] z-[100] ">
          <Link to="/" className="outline-none border-none">
            <img src={logo} className="" />
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="font-bold mr-3 cursor-pointer">
            <a href="#">Poppular films</a>
          </li>
          <li className="font-bold mr-3 cursor-pointer">
            <a href="#">Now Playing</a>
          </li>
          <li className="font-bold mr-3 cursor-pointer">
            <a href="#">Upcoming Films</a>
          </li>
        </ul>
      </nav>
      <div className="h-screen">
        <div className="w-full h-full">
          <img
            src="https://www.themoviedb.org/t/p/original/uKYUR8GPkKRCksczYDJb3pwZauo.jpg"
            className="w-full h-full  object-cover"
          />
        </div>
      </div>

      <Movies title={"Popular Films"} type={"popular"} />
      <Movies title={"Now Playing"} type={"now_playing"}/>
      <Movies title={"Upcoming Films"} type={"upcoming"}/>

    </>
  );
};

export default Home;
