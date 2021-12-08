import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import List from "../../components/list/List"
import axios from "axios"
import "./home.scss"
import {useState, useEffect} from "react"

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() =>{
        const getRamdomLists = async ()=>{
            try{
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${
                      genre ? "&genre=" + genre : ""}`
                );
                setLists(res.data);
            }catch(err)
            {
                console.log(err);
            }
        };
        getRamdomLists();
    }, [type, genre]);
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type} setGenre={setGenre}/>
            {lists.map((list)=>(
                <List list={list}/>
            ))}
            
             
            
        </div>
    )
}

export default Home
