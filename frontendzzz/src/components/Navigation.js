import React, { useEffect, useState } from "react";
import '../style/style.css';
import learneaselogo from '../style/images/logo4.jpg';
import * as constants  from '../service/Constants';
import {  signOut } from "firebase/auth";
import {auth} from '../service/firebase';
import { useNavigate } from 'react-router-dom';

function Navigation({activePage}) {



    const [active, setActive] = useState("inactive");

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
            localStorage.removeItem('user');
        }).catch((error) => {
        // An error happened.
        });
    }

    React.useEffect(() => {
        setActive(activePage)    
      }, []);

    return (
        <nav>
            <img src={learneaselogo} alt="BigCo Inc. logo" />
            <div className="navigation">
                <ul>
                    <i id="menu-close" className="fa-solid fa-circle-xmark" aria-hidden="true" />
                    <li><a className={
                        `${active==="homePage" ? "active" : "inactive"} `
                    }  href={constants.LOCAL_BASE_URL+'home'}>Home</a></li>

                    <li><a id="aboutPage" className={
                        `${active==="aboutPage" ? "active" : "inactive"} `
                    }  href={constants.LOCAL_BASE_URL+'about'}>About</a></li>

                    <li><a className={
                        `${active==="blogPage" ? "active" : "inactive"} `
                    } href={constants.LOCAL_BASE_URL+'blog'}>Blog</a></li>

                    <li><a className={
                        `${active==="coursePage" ? "active" : "inactive"} `
                    } href={constants.LOCAL_BASE_URL+'course'}>Courses</a></li>

                    <li><a className={
                        `${active==="contactPage" ? "active" : "inactive"} `
                    } href={constants.LOCAL_BASE_URL+'contact'}>Contact</a></li>

                    <li><a className={
                        `${active==="logoutPage" ? "active" : "inactive"} `
                    } href={constants.LOCAL_BASE_URL} onClick={handleLogout}>Logout</a></li>
                </ul>
                <img id="menu-btn" src="images/menu.jpg" alt="" />
            </div>
        </nav>
    )

}

export default Navigation;