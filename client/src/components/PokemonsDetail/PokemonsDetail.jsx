import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPokemonDetail, separateLocations } from "../../redux/actions/actions";
import styles from "./PokemonsDetail.module.css";
import icons from "../../images/IconsType";

const PokemonsDetail = () => {
    const { id } = useParams();
    const detail = useSelector((state) => state.detail);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const toBack = () => {
        dispatch(separateLocations())
    }

    useEffect(() => {
        if (!Object.keys(detail).length || detail.id?.toString() !== id.toString())
            dispatch(getPokemonDetail(id));
        if (detail.id && detail.id?.toString() === id.toString()) {
            setLoading(false);
        }
    }, [detail,id, dispatch]);

    return !loading ? (
        <div className={styles.container}>
            <Link to="/home">
                <button onClick={toBack}>Back</button>
            </Link>
            <div className={styles.detail}>
                <div className={styles.head}>
                    <h3>{detail.name[0]?.toUpperCase() + detail.name?.slice(1)}</h3>
                </div>
                <div className={styles.imgInfo}>
                    <div className={styles.divImg}>
                        <img src={detail.image} alt={detail.name} />
                    </div>
                    <div className={styles.info}>
                        <div>
                            <label htmlFor="life">{`Life ${detail.life}%:`}</label>
                            <progress id="life" max="100" value={detail.life}></progress>
                        </div>
                        <div>
                            <label htmlFor="attack">{`Attack ${detail.attack}%:`}</label>
                            <progress id="attack" max="100" value={detail.attack}></progress>
                        </div>
                        <div>
                            <label htmlFor="defense">{`Defense ${detail.defense}%:`}</label>
                            <progress id="defense" max="100" value={detail.defense}></progress>
                        </div>
                        <div>
                            <label htmlFor="speed">{`Speed ${detail.speed}%:`}</label>
                            <progress id="speed" max="100" value={detail.speed}></progress>
                        </div>
                        <span>{`Weight: ${detail.weight}`}</span>
                        <span>{`Height: ${detail.height}`}</span>
                    </div>
                </div>
                <div className={styles.types}>
                    {detail.type
                        ? detail.type.map((ty) => (
                              <div>
                                  <img className={styles.ico} src={icons[ty]} alt={ty} />
                                  <span>{`${ty[0].toUpperCase()}${ty.slice(1)}`}</span>
                              </div>
                          ))
                        : detail.types.map((ty) => (
                              <div>
                                  <img className={styles.ico} src={icons[ty]} alt={ty} />
                                  <span>{`${ty[0].toUpperCase()}${ty.slice(1)}`}</span>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.loading}>
            <img
                src="https://i.kym-cdn.com/photos/images/newsfeed/000/891/176/b6f.gif"
                alt="Loading"
            />
        </div>
    );
};

export default PokemonsDetail;
