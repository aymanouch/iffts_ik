import React from 'react'
import "./header.scss";
import img from "../../images/image-01.jpg";
const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <h1>IFTTS <span>imouzzare kander</span></h1>
            </div>
            <img alt="school" src={img} />
        </div>
    )
}

export default Header
