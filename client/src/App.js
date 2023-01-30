import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PokemonsDetail from "./components/PokemonsDetail/PokemonsDetail";
import About from "./components/About/About";
import Form from "./components/Form/Form";

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route path={["/home", "/form", "/about"]} component={Header} />
            <Route exact path="/home" component={Home} />
            <Route path="/home/:id" component={PokemonsDetail} />
            <Route path="/about" component={About} />
            <Route path="/form" component={Form} />
            <Route path={["/home", "/form", "/about"]} component={Footer} />
        </div>
    );
}

export default App;
