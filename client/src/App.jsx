import "./app.scss";
import { Routes ,Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import CastDT from "./pages/castDt/CastDt";
import News from "./pages/news/News";
import NewDetail from "./pages/newDetail/NewDetail";
import Navbar from "./components/navbar/Navbar";
import HomeAdmin from "./pages/admin/adminHome/AdminHome"


function App () {
  return  (
    // <Routes>
    //    <Route exact path="/" element ={<Home/>}/>
         
    //   <Route  path="/HomeAdmin" element ={<HomeAdmin/>}/>

     
      
    // </Routes>
    <HomeAdmin/>
  )
};


export default App;