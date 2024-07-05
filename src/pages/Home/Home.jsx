// import "./Home.css"
// import Header from "../../components/Header/Header"
// import Card from "../../components/Card/Card"

// function Home() {
//   return (
//     <div className="homePage_container">
//       <Header/>
//       <Card/>
//         {/* <div className="headerCardWrapper el1"><Header/></div>
//          <div className="FeaturedMovieWrapper el2">
//            <Card/>
//           </div>  */}
          
//     </div>
//   )
// }
// export default Home


import "./Home.css"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"
import React, { useState } from "react";

function Loader(){
  return(
    <section className="loaderSection">
      <h1>MovieDescovery...</h1>
    </section>
    
  )
}




function Content() {
  return (
    <div className="homePage_container">
      <Header/>
      <Card/>
        {/* <div className="headerCardWrapper el1"><Header/></div>
         <div className="FeaturedMovieWrapper el2">
           <Card/>
          </div>  */}
          
    </div>
  )
}


function Home() {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(()=>{
    setIsLoading(false)
  },5000)

  return (
    <section className="Home">
       {isLoading ? <Loader/> : <Content/>}
       <Loader/>
    </section>
   
  );
}



export default Home








// import "./Home.css"
// import Header from "../../components/Header/Header"
// import Card from "../../components/Card/Card"
// import FeaturedMovie from "../../components/Featured_Movie/FeaturedMovie"

// function Home() {
//   return (
//     <div className="homePage_container">
//         <div className="headerCardWrapper el1"><Header/></div>
//         <section className="FeaturedMovieWrapper el2">
//           <Card/>
//            {/* <FeaturedMovie/> */}
//           </section>
//     </div>
//   )
// }
// export default Home