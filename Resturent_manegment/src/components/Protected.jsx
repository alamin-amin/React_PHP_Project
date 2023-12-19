import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
 
export default function Protected(props) {
    const naviget = useNavigate();
    const { Component } = props;
    useEffect(() => {
        let login = localStorage.getItem("login");
        if(!login){
            localStorage.setItem("loginStatus", "Please login to view dashboard!");
            naviget("/home", {replace: true});
        }
    }, []);
 
    return(
        <Component />
    );
 }
