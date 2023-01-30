import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../../redux/actions/actions';
import styles from "./SearchBar.module.css"

const SearchBar = ({setSearchStatus}) => {

    const dispatch = useDispatch()

    const [nameState, setNameState] = useState("");

    const handleChage = (event) => {
        const { value } = event.target;
        setNameState(value)
    }

    const searchFunction = (event) => {
        const keycode = event.keyCode || event.which;
        if (keycode) {
            if (keycode === 13) {
                dispatch(getPokemonByName(nameState))
                setNameState("");
                setSearchStatus(true)
            }
        }
        else { 
            dispatch(getPokemonByName(nameState));
            setNameState("");
            setSearchStatus(true);
        }
    }
    
    return (
        <div className={styles.search}>
            <input type="text" onChange={handleChage} onKeyUp={searchFunction} value={nameState} />
            <button onClick={searchFunction} > Search</button>
        </div>
    );
};

export default SearchBar