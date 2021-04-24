import React, {useState} from "react";
import "../Header/style.scss"
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className={"navbar"}>
                <div className={"nav-container"}>
                    <span className={"nav-logo"}>
                       Polymorphic
                    </span>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className={"nav-item"}>
                            <NavLink exact to="/"
                                     className={"nav-links"}
                                     onClick={handleClick}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/work"
                                     className={"nav-links"}
                                     onClick={handleClick}
                            >
                                WORK
                            </NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/about"
                                     className={"nav-links"}
                                     onClick={handleClick}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/blog"
                                     className={"nav-links"}
                                     onClick={handleClick}
                            >
                                BLOG
                            </NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/contact"
                                     className={"nav-links"}
                                     onClick={handleClick}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink exact to="/buy-theme"
                                     className={"nav-links"}
                                     onClick={handleClick}
                            >
                                BUY THEME
                            </NavLink>
                        </li>
                    </ul>
                    <div className={"nav-icon"} onClick={handleClick}>
                        <MenuIcon/>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;