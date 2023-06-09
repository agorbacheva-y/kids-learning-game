import { useNavigate } from "react-router-dom";
import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import InfoForParents from "./InfoForParents";

const Menu = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="closebtn-container">
                <CloseButton onClick={() => navigate("/")} className="closebtn"></CloseButton> 
            </div>
            
            <div className="container"> 
                <h1>Choose a Game</h1>
            </div>

            <div className="menu-container">
                <button 
                    className="menu-btn"
                    onClick={() => navigate("/bodypartgame")}
                >
                    Body Part Game
                </button>
                <button 
                    className="menu-btn"
                    onClick={() => navigate("/shapegame")}
                >
                    The shape Game
                </button>
                <InfoForParents></InfoForParents>
            </div>
        </>
    );
};

export default Menu;