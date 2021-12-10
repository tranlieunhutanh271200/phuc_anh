import React, { useReducer } from 'react'
import Navbar from '../navbar/Navbar';
import "./ProfileScreen.scss"
import axios from "axios";
import { useSelector } from 'react-redux'
import {
    Link
} from "react-router-dom";
import { SpaOutlined } from '@material-ui/icons';
const ProfileScreen = () => {
    const auth = useSelector(state => state.auth)
    const { user, isLogged } = auth
    console.log(useSelector(state => state.token))
    // const userLink = () => {
    //     return <>
    //         <span>{user.email}</span>
    //         </>
    // }
  
    const handleLogout = async () => {
        try {
            await axios.get('/users/logout')
            localStorage.removeItem('firstlogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }
    
    return (
    <div className = "profileScreen">
        <Navbar/>
        <div className ="profileScreen_body">
            <h1>Profile</h1>
            <div className = "profileScreen_info">
                <img
                src = {user.profilePic}
                // src="https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg"
                alt=""
            />           
               
                <div className ="profileScreen_details">
                    {
                        <>
                        <span>Email : </span>
                         <input type="text"  placeholder={user.email}/> 
                        </>
                    } 
  
                    {
                        <>
                        <span>First Name : </span>
                        <input type="text"  placeholder={user.firstname}/> 
                        </>
                    }  
                  
                     {
                         <>
                         <span>Last Name : </span>
                       <input type="text"  placeholder={user.lastname}/> 
                        </>
                    }  
                  
                    {
                        // <>
                        
                        // <span>Date of birth :</span>
                        // <input type="date" id="dob" name="dob" ></input>
                        // </>
                    }  
                     
                    <div className = "profileScreen_plans">
                        {/* <PlansScreen/> */}
                        
                        <button className = "profileScreen_signOut" onClick={handleLogout}>Sign Out</button>
                    </div>
                </div>
                </div>
        </div>
    </div>
   );
}
export default ProfileScreen;