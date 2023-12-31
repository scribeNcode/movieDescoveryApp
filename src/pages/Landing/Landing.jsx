import "../Landing/Landing.css"
import Navbar from "../../components/Header/Navbar/Navbar";
function Landing(){
    return(
        <div className="landing-page">
            <Navbar/>
            <h1>Endless access to movies, TV shows, and beyond.</h1>
            <p>Stream from any location. Terminate your subscription at any moment.</p>
            
        </div>
    )
}

export default Landing;