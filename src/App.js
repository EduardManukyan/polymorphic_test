import React from "react";
import Footer from "./Components/Footer/footer";
import CardContainer from "./Components/Cards/cardContainer";
import NavBar from "./Components/Header/navBar";
import Home  from "./Components/Navigation/home"
import About from "./Components/Navigation/about";
import Blog from "./Components/Navigation/blog";
import BuyTheme from "./Components/Navigation/buyTheme";
import Contact from "./Components/Navigation/contact";
import Work from "./Components/Navigation/work";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <NavBar/>



            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/buy-theme" component={BuyTheme}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/work" component={Work}/>

            </Switch>
                <Footer/>
            </Router>
        </>

    );
}

export default App;
