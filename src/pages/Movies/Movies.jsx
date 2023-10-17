import React from "react";
import "../Movies/Movies.css";
import Logo from "./assets/Tv.png";
import {GoHome} from 'react-icons/go'
import {BsCameraReels} from 'react-icons/bs'
import {PiMonitorPlayLight} from 'react-icons/pi'
import {VscCalendar} from 'react-icons/vsc'
function Movies() {
  return (
    <div className="moviesPageWrapper">
      <div className="moviesSideBarArea">
        <div className="moviesSideBarcontainer">
          <div className="moviesLogoContainer">
            <object data={Logo}></object>
            <h1>MovieBox</h1>
          </div>

          <ul className="moviesNavigationsContainer">
            <li> <span className="moviesNavigationIcon">< GoHome/></span> <span id="goHomeName" className="moviesNavigationName" >Home</span></li>
          <li> <span className="moviesNavigationIcon"><BsCameraReels/></span>  <span id="moviesHomeName" className="moviesNavigationName" >Movies</span> </li>
          <li> <span className="moviesNavigationIcon"><PiMonitorPlayLight/></span> <span className="moviesNavigationName" >Tv series</span></li>
          <li> <span className="moviesNavigationIcon"><VscCalendar/></span>  <span className="moviesNavigationName" >Upcoming</span> </li>
          </ul>

        </div>
      </div>
      <div className="moviesPageViewArea">mainview</div>
    </div>
  );
}
export default Movies;
