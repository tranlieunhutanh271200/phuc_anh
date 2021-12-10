import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import "./watch.scss";
import {
  Link
} from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(movie)
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined/>
        <span><Link className="link" to ="/"> Home</Link></span>
       
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.trailer}
      />
    </div>
  );
}
