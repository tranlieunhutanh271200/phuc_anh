import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./cast.scss"
import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Cast({list}) {
    
    const [character, setCharacter] = useState({});
    useEffect(() => {
        const getCharacter = async () => {
          try {
            const res = await axios.get("/characters/find/" + list.character);
            setCharacter(res.data);

          } catch (err) {
            console.log(err);
          }
        };
        getCharacter();
      }, [list.character]);

    return (

            <div
            className="cast">
                

                <img src="https://ss-images.saostar.vn/2019/06/14/5410259/tomholland-gettyimages-982644220-920x584.jpg"
                 alt="" />

                

                <div className="name-cast"></div>
                
                <div className="name-charac">{character.name}</div>
            </div>
    )
}
