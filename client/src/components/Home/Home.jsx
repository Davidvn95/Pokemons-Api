import React, { useState } from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import PokemonsCards from "../PokemonsCards/PokemonsCards";
import Paginations from "../Paginations/Paginations";
import { useSelector } from "react-redux";

const Home = () => {
    const render = useSelector(state=>state.render)
    const [pagina, setPagina] = useState(1);

    const porPagina = 8;

    const maximo = Math.ceil(render.length / porPagina);


    return (
        <div className={styles.home}>
            <NavBar />
            <Paginations pagina={pagina} setPagina={setPagina} maximo={maximo} />
            <PokemonsCards pagina={pagina} porPagina={porPagina}/>
        </div>
    );
};

export default Home;
