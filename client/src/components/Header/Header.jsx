import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanForm } from "../../redux/actions/actions";

function Header() {
    const dispatch = useDispatch();

    const recharge = () => {
        dispatch(cleanForm());
    };

    return (
        <div className={styles.container}>
            <h1>HENRY POKEDEX</h1>
            <div className={styles.buttons}>
                <Link to="/about">
                <button>About</button>
                </Link>
                <Link to="/home">
                    <button onClick={recharge}>Home</button>
                </Link>
                <Link to="/form">
                <button>Create</button>
                </Link>
                <Link to="/">
                    <button>Logout</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
