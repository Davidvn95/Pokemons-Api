import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./LandingPage.module.css";
import font from "../../images/pokemon-in-the-wild.mp4";
import { getAllPokemons, getAllTypes, separateLocations } from "../../redux/actions/actions";

const LandingPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
    });

    const separate = () => {
        dispatch(separateLocations())
    }


    return (
        <div className={styles.container}>
            <div className={styles.infoPage}>
                <span>Welcome to POKEDEX!</span>
                <Link to="/home">
                    <button onClick={separate} >START</button>
                </Link>
            </div>
            <video muted autoPlay loop>
                <source src={font} type="video/mp4" />
            </video>
            <div className={styles.capa}></div>
        </div>
    );
};

export default LandingPage;
