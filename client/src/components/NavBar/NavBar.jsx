import React, { useState } from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import { useDispatch } from "react-redux";
import { separateLocations } from "../../redux/actions/actions";

const NavBar = () => {
    const dispatch = useDispatch()

    const[searchStatus, setSearchStatus] = useState(false)


    const recharge = () => {
        dispatch(separateLocations());
        setSearchStatus(false)
    };

    return (
        <div className={styles.contentNav}>
            <div className={styles.container}>
                <SearchBar searchStatus={searchStatus} setSearchStatus={setSearchStatus} />
                <Filters />
            </div>
            {searchStatus && <button onClick={recharge} >Back</button>}
        </div>
    );
};

export default NavBar;
