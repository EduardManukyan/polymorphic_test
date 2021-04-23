import React from "react";
import "../Footer/style.scss"
import {Facebook, Behance, GooglePlus, Instagram, Pinterest, Twitter} from "../Resources";

function Footer() {
    return (
        <div className={"footerMainContainer"}>
            <div className={"container"}>
                <Facebook className={"imgStyle"}/>
                <Twitter className={"imgStyle"}/>
                <GooglePlus className={"imgStyle"}/>
                <Behance className={"imgStyle"}/>
                <Pinterest className={"imgStyle"}/>
                <Instagram className={"imgStyle"}/>
            </div>
        </div>


    )
}

export default Footer