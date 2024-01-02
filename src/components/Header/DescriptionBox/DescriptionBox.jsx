import "./DescriptionBox.css";
import IMBDLogo from "./assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import TomatoLogo from "./assets/rottenTomatoes.svg";
import PlayIcon from "./assets/Play.png";

function DescriptionBox() {
  return (
    <div className="DescriptionBox">
      <div className="description-text-div">
        <h2>John Wick 3 : Parabellum</h2>
      </div>

      <div className="descriptionBoxTextArea">
        <div className="ratingBox">
          <div className="IMBD_div">
            <img src={IMBDLogo} alt="" srcset="" />
            <span id="IMBD_text">86.0 / 100</span>
          </div>

          <div className="rotten_tomatoes_div">
            <img src={TomatoLogo} alt="" srcset="" />
            <p id="tomatoPercentage">97%</p>
          </div>
        </div>

        <div className="poster-movie-description">
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
        </div>

        <button className="">
          <img src={PlayIcon} alt="" />
          <span>Watch Trailer</span>
        </button>
      </div>
    </div>
  );
}
export default DescriptionBox;
