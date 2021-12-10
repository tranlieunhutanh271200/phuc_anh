import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios"
import { useState , useEffect} from "react"
import { WatchTrailer } from "../watchTrailer/WatchTrailer"
import "./featured.scss"
import {
    Link
} from "react-router-dom";
export default function Featured({type, setGenre}) {
    const [showWatchModal, setShowModalTrailer] = useState(false)
    const openModalTrailer =()=>{
        setShowModalTrailer(prev =>! prev)
    }
   
   
    const [content, setContent] = useState({});
    useEffect(() =>{
        const getRandomContent = async () =>{
            try{
                const res = await axios.get(`/lists/random?type=${type}`);
                setContent(res.data[0]);
               

            }catch (err){
                console.log(err);
            }

        };
        getRandomContent();

    }, [type]);
    console.log(content)
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                         <select name="genre" id="genre" onChange={(e)=> setGenre(e.target.value)}>
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                         </select>
                    </div>
            )}
                <img className ="cover"
                    src={content.coverPic}
                    alt=""/>
            <div className="info">
                
                <img 
                    src={content.namePic}
                    alt="" />
                <span className="description">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play" 
                    // onClick={openModalTrailer}
                    >
                        <PlayArrow/>
                        <span><Link className="link" to={{pathname: "/watch", movie : content}}>Trailer</Link></span>    
                    </button>
                    
                    <button className="more">
                        <InfoOutlined/>
                        <span><Link className="link" to={{pathname: "/moviedetails", movie : content}}>More</Link></span>    
                    </button>
                </div>
                <WatchTrailer showWatchModal={showWatchModal} setShowModalTrailer={setShowModalTrailer} className="watchtrailer"/>
            </div>           
        </div>
    )
}
