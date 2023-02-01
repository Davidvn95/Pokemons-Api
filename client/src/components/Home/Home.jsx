import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import PokemonsCards from "../PokemonsCards/PokemonsCards";
import Paginations from "../Paginations/Paginations";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes } from "../../redux/actions/actions";

const Home = () => {
    const pokemons = useSelector(state=>state.pokemons)
    const render = useSelector(state=>state.render)
    const [pagina, setPagina] = useState(1);
    const dispatch = useDispatch()

    const porPagina = 8;

    const maximo = Math.ceil(render.length / porPagina);

    useEffect(() => {
        if (!pokemons.length) {
            dispatch(getAllPokemons())
            dispatch(getAllTypes())
        }
    })

    return (
        <div className={styles.home}>
            <NavBar />
            <Paginations pagina={pagina} setPagina={setPagina} maximo={maximo} />
            <PokemonsCards pagina={pagina} porPagina={porPagina}/>
        </div>
    );
};

export default Home;
