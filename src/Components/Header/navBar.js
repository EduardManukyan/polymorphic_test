import React, {useState} from "react";
import "../Header/style.scss"
import MenuIcon from '@material-ui/icons/Menu';


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <span className="nav-logo">
                       Polymorphic
                    </span>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a

                                className="nav-links"
                                onClick={handleClick}
                            >
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a

                                className="nav-links"
                                onClick={handleClick}
                            >
                                WORK
                            </a>
                        </li>
                        <li className="nav-item">
                            <a

                                className="nav-links"
                                onClick={handleClick}
                            >
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a

                                className="nav-links"
                                onClick={handleClick}
                            >
                                BLOG
                            </a>
                        </li>
                        <li className="nav-item">
                            <a

                                className="nav-links"
                                onClick={handleClick}
                            >
                                CONTACT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a

                                className="nav-links"
                                onClick={handleClick}
                            >
                                BUY THEME
                            </a>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <MenuIcon/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;