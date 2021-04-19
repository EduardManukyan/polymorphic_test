import React from "react";
import "./style.scss"

function NavBar() {
    return (
        <div className={"mainContainer"}>
            <div className={"containerRouting"}>
                <span className={"routStyle"}>HOME</span>
                <span className={"routStyle"}>WORK</span>
                <span className={"routStyle"}>ABOUT</span>
                <span className={"routStyle"}>BLOG</span>
                <span className={"routStyle"}>CONTACT</span>
                <span className={"routStyle"}>BUY THEME</span>
            </div>

        </div>
    )

}

export default NavBar