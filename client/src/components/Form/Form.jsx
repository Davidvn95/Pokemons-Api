import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanForm, createPokemon, getAllPokemons, getAllTypes } from "../../redux/actions/actions";
import Card from "../Card/Card";
import styles from "./Form.module.css";

const Form = () => {
    const created = useSelector(state => state.created);
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

    const cleaningForm = ()=>{
        dispatch(cleanForm())
    }

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
        if (newPokemon.name?.length && newPokemon.type?.length) {
            const body = {};
            for (const prop in newPokemon) {
                if(newPokemon[prop] !== "")body[prop] = newPokemon[prop];
            }
            dispatch(createPokemon(body));
            dispatch(getAllPokemons());
            dispatch(getAllTypes())
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
            <button onClick={cleaningForm}>New</button>
        </div>
    ) : (
        <div className={styles.container}>
            <h2>Creation form</h2>
            <div className={styles.form_Img}>
                <form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleForm}
                            value={newPokemon.name}
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="life">Life: </label>
                        <input
                            type="number"
                            name="life"
                            onChange={handleForm}
                            value={newPokemon.life}
                        />
                    </div>
                    <div>
                        <label htmlFor="attack">Attack: </label>
                        <input
                            type="number"
                            name="attack"
                            onChange={handleForm}
                            value={newPokemon.attack}
                        />
                    </div>
                    <div>
                        <label htmlFor="defense">Defense: </label>
                        <input
                            type="number"
                            name="defense"
                            onChange={handleForm}
                            value={newPokemon.defense}
                        />
                    </div>
                    <div>
                        <label htmlFor="speed">Speed: </label>
                        <input
                            type="number"
                            name="speed"
                            onChange={handleForm}
                            value={newPokemon.speed}
                        />
                    </div>
                    <div>
                        <label htmlFor="weight">Weight: </label>
                        <input
                            type="number"
                            name="weight"
                            onChange={handleForm}
                            value={newPokemon.weight}
                        />
                    </div>
                    <div>
                        <label htmlFor="height">Height: </label>
                        <input
                            type="number"
                            name="height"
                            onChange={handleForm}
                            value={newPokemon.height}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input
                            type="text"
                            name="image"
                            onChange={handleForm}
                            value={newPokemon.image}
                            placeholder="Enter a URL"
                        />
                    </div>
                    <div>
                        <label htmlFor="type">Type: </label>
                        <select name="type" onChange={handleForm}>
                            <option disabled>Select a type</option>
                            {types.map((typ, index) => (
                                <option key={index}>{typ.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="type2">Type2 (optinal): </label>
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
                        newPokemon.image || "https://i.ibb.co/zPfjMYc/Pokemon-desconocido.jpg"
                    }
                    alt="Created"
                />
            </div>
        </div>
    );
};

export default Form;
