import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    createPokemon,
    getAllPokemons,
    getAllTypes,
    separateLocations,
} from "../../redux/actions/actions";
import Card from "../Card/Card";
import styles from "./Form.module.css";

const Form = () => {
    const created = useSelector((state) => state.created);
    const types = useSelector((state) => state.types);
    const dispatch = useDispatch();

    const [newPokemon, setnewPokemon] = useState({
        name: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        height: "",
        image: "",
        type: [],
    });

    const regexName = /^[a-zA-ZÀ-ÿ]{4,10}$/;

    const toBack = () => {
        dispatch(separateLocations());
    };

    const handleForm = (event) => {
        const property = event.target.name;
        const { value } = event.target;
        if (property !== "type" && property !== "type2") {
            setnewPokemon({
                ...newPokemon,
                [property]: value,
            });
        } else {
            if (property === "type2") {
                setnewPokemon({
                    ...newPokemon,
                    [property.slice(0, -1)]: newPokemon.type
                        ? [newPokemon.type[0], value]
                        : [value],
                });
            } else {
                setnewPokemon({
                    ...newPokemon,
                    [property]: [value],
                });
            }
        }
    };

    const submitFunction = (event) => {
        event.preventDefault();
        if (regexName.test(newPokemon.name) && newPokemon.type?.length) {
            const body = {};
            for (const prop in newPokemon) {
                if (newPokemon[prop] !== "") body[prop] = newPokemon[prop];
            }
            dispatch(createPokemon(body));
            dispatch(getAllPokemons());
            dispatch(getAllTypes());
        } else alert("Name and Type are required");
    };

    return created.id ? (
        <div className={styles.cards}>
            <Card
                id={created.id}
                name={created.name}
                image={created.image}
                type={created.type ? created.type : created.types}
            />
            <div className={styles.buttons}>
                <Link to="/home">
                    <button onClick={toBack}>Back</button>
                </Link>
                <button onClick={toBack}>New</button>
            </div>
        </div>
    ) : (
        <div className={styles.container}>
            <h2>Creation form</h2>
            <div className={styles.form_Img}>
                <form>
                    <div className={styles.info}>
                        <label htmlFor="name">Name*: </label>
                        <div className={styles.errorName}>
                            <input
                                type="text"
                                name="name"
                                onChange={handleForm}
                                value={newPokemon.name}
                                placeholder="Enter a Name"
                                autoComplete="off"
                            />
                            {newPokemon.name !== "" && !regexName.test(newPokemon.name) && (
                                <span>
                                    *Name must be between 4 and 10 characters and not include
                                    numbers, spaces or special characters*
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="life">Life: </label>
                        <input
                            type="number"
                            name="life"
                            onChange={handleForm}
                            value={newPokemon.life}
                            placeholder="Deafult 1"
                        />
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="attack">Attack: </label>
                        <input
                            type="number"
                            name="attack"
                            onChange={handleForm}
                            value={newPokemon.attack}
                            placeholder="Default 1"
                        />
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="defense">Defense: </label>
                        <input
                            type="number"
                            name="defense"
                            onChange={handleForm}
                            value={newPokemon.defense}
                            placeholder="Default 1"
                        />
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="speed">Speed: </label>
                        <input
                            type="number"
                            name="speed"
                            onChange={handleForm}
                            value={newPokemon.speed}
                            placeholder="Default 1"
                        />
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="weight">Weight: </label>
                        <input
                            type="number"
                            name="weight"
                            onChange={handleForm}
                            value={newPokemon.weight}
                            placeholder="Default 1"
                        />
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="height">Height: </label>
                        <input
                            type="number"
                            name="height"
                            onChange={handleForm}
                            value={newPokemon.height}
                            placeholder="Default 1"
                        />
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="image">Image: </label>
                        <input
                            type="text"
                            name="image"
                            onChange={handleForm}
                            value={newPokemon.image}
                            placeholder="Enter a URL"
                        />
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="type">Type*: </label>
                        <select name="type" onChange={handleForm}>
                            <option>Select a type</option>
                            {types.map((typ, index) => (
                                <option key={index}>{typ.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="type2">Type2 (optional): </label>
                        <select name="type2" onChange={handleForm}>
                            <option value="null">Select a type</option>
                            {types.map((typ, index) => (
                                <option key={index}>{typ.name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={submitFunction}>Submit</button>
                </form>
                <img
                    src={
                        newPokemon.image ||
                        "https://i.postimg.cc/Bb6Vrv5R/Pokemon-desconocido.jpg"
                    }
                    alt="Created"
                />
            </div>
        </div>
    );
};

export default Form;
