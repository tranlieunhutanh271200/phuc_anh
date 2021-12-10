import { Check, PlayArrow, Star } from "@material-ui/icons"
import { useState } from "react"
import { FaStar } from "react-icons/fa"
// import ModalNotiRating from "../modal/modalNotiRating/ModalNotiRating"
import ModalRating from "../modal/modalRating/ModalRating"
import { WatchTrailer } from "../watchTrailer/WatchTrailer"
import "./featuredMovie.scss"
import {
    Link
} from "react-router-dom";

export default function FeaturedMovie({id}) {
    console.log(id);
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="featuredMovie">
            {/* {type && (
                <div className="category">
                    
                    </div>
            )} */}
                <img 
                    src={id.coverPic}
                    alt=""/>
            <div className="info">
                <img 
                    src= {id.namePic}
                    alt="" />
                {/* <div className="generinfo">
                    <>
                    <span className="match">98% Match</span>
                    <span className="limit">+{id.limit}</span>
                    <span className="year">2021</span>
                    <span className="rating-score">{id.rating}</span>
                    <span className="rating-percent">10</span>
                    </>
                    <span className="time-detail">1 hour 14 mins</span>
                </div> */}
                {/* <div className="time">
                    <span className="progress-bar" style={{width: "30%"}}></span>                    
                </div> */}
                <span className="description">
                    {id.desc}
                </span>
                <div className="buttons">
                    <button className="play" 
                    // onClick={openModalTrailer}
                    >
                        <PlayArrow/>
                        <span><Link className="link" to={{pathname: "/watch", movie : id}}>Trailer</Link></span>  
                    </button>
                    <button className="rate"
                    onClick={() => {setOpenModal (true)}}>
                        <FaStar className="star"/>
                        <span className="rate">Rate</span>
                    </button>
                    
                    <button className="more">
                        <Check/>
                        <span>Watch List</span>
                    </button>
                    {openModal && <ModalRating closeModal={setOpenModal}/>}
                                  
                </div>
            </div>           
        </div>
    )
}