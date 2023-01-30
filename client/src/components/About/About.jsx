import React from "react";
import styles from "./About.module.css";

const About = () => {

    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h1>HENRY POKEDEX</h1>
                <h2>Description</h2>
                <p>
                    Henry Pokedex App is an application with the POKEDEX theme whose functionality
                    is to search for existing pokemons and obtain detailed information on each
                    one by clicking on the card that represents it. When you enter the app, it
                    will show you all the pokemons it has information about, you can search for
                    a particular one if you know the name or, you can organize them in
                    ascending and descending order both by name and by the Pokémon's attack
                    level; You will also have the option to filter them according to the type
                    of Pokémon you want to see, taking into account that there are 18 types in
                    total.
                    <br />
                    <br />
                    The app also offers you the option to have fun creating your own pokemons
                    to your liking, you can be, if you wish, your own pokemon, then you can
                    filter only the pokemons created or existing by default in the app.
                </p>
                <h2>Creator</h2>
                <br />
                <img
                    src="https://i.postimg.cc/RhVhGHwR/comica1589721034434-copia.jpg"
                    alt="My Perfil"
                />
                <br />
                <p>
                    This app was created by David Vergara, a programming and web development
                    student at the Soy Henry digital academy. David is currently 27 years old
                    and fell in love with programming after meeting it in the preparatory
                    course at the academy. This application was developed as an IP work
                    (Individual Project) and is created with the following technologies:
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>Sequelize - Postgres</li>
                    </ul>
                </p>
                <span>Thank you for visiting the APP, please enjoy it.</span>
            </div>
        </div>
    );
};

export default About;
