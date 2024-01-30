import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../service/firebase';

const PrivateRoutes = () => {
    
    
    const user = JSON.parse(localStorage.getItem('user'));


    
    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes