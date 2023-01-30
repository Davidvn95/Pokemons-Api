import React from "react";
import { Link } from "react-router-dom";
import icons from "../../images/IconsType";
import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.superior}>
                <span>{props.name[0]?.toUpperCase() + props.name?.slice(1)}</span>
            </div>
            <Link to={`/home/${props.id}`}>
                <div className={styles.containerImg}>
                    <img className={styles.image} src={props.image} alt={props.name} />
                </div>
            </Link>
            <div className={styles.inferior}>
                {props.type?.map((ty,index) => {
                    return (
                        <div key={index} >
                            <img className={styles.ico} src={icons[ty]} alt={ty} key={index} />
                            <span>{`${ty[0].toUpperCase()}${ty.slice(1)}`}</span>
                        </div>
                    );
                })}
            </div>
        </div>
        // </Link>
    );
};

export default Card;
