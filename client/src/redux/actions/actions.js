import axios from "axios";

//? Actions
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"; // trae todos los pokemons
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL"; // trae el pokemons por Id
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"; // busca el pokemon por name
export const GET_ALL_TYPES = "GET_ALL_TYPES"; // trae todos los tipos
export const CREATE_POKEMON = "CREATE_POKEMON"; // hace el post para crear un pokemons en la DB
export const SEPARATE_LOCATIONS = "SEPARATE_LOCATIONS"; // separa los pokemons de Db y Api
export const SORT_POKEMONS = "SORT_POKEMONS"; // ordena los pokemons segun lo indicado
export const SHOW_DB = "SHOW_DB"; // renderiza los pokemons de la Db
export const SHOW_API = "SHOW_API"; // renderiza los pokemons de la Api
export const SHOW_ALL = "SHOW_ALL"; // Renderiza todos los pokemons
export const FILTER_IN_ALL = "FILTER_IN_ALL"; // filtra según el tipo de cada pokemon
export const FILTER_IN_API = "FILTER_IN_API"; // filtra según el tipo de cada pokemon
export const FILTER_IN_DB = "FILTER_IN_DB"; // filtra según el tipo de cada pokemon
export const FILTER_IN_RENDER = "FILTER_IN_RENDER"; // filtra según el tipo de cada pokemon
export const CLEAN_FORM = "CLEAN_FORM"; // Limpia el estado de created para poder crear un nuevo pokemon

// *****************************************************************************
//? Rutas Back-End;
const pokemonsRoutes = "http://localhost:3001/pokemons/";
const typesRoutes = "http://localhost:3001/types/";

// *****************************************************************************
//? Actions creators;
export const getAllPokemons = () => async (dispatch) => {
    try {
        const response = await axios.get(pokemonsRoutes);
        dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
    } catch (error) {
        return alert(error.message);
    }
};

export const getPokemonDetail = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${pokemonsRoutes}${id}`);
        dispatch({ type: GET_POKEMON_DETAIL, payload: response.data });
    } catch (error) {
        return alert(error.message);
    }
};

export const getPokemonByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`${pokemonsRoutes}?name=${name}`);
        dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data });
    } catch (error) {
        return alert("Pokemon not found");
    }
};

export const getAllTypes = () => async (dispatch) => {
    try {
        const response = await axios.get(typesRoutes);
        dispatch({ type: GET_ALL_TYPES, payload: response.data });
    } catch (error) {
        return alert(error.message);
    }
};

export const createPokemon = (info) => async (dispatch) => {
    try {
        const response = await axios.post(pokemonsRoutes, { ...info });
        dispatch({ type: CREATE_POKEMON, payload: response.data[1] });
    } catch (error) {
        return alert(error.message);
    }
};

export const separateLocations = () => (dispatch) => {
    return dispatch({ type: SEPARATE_LOCATIONS });
};

export const sortPokemons = (order) => (dispatch) => {
    return dispatch({ type: SORT_POKEMONS, payload: order });
};

export const showDb = () => (dispatch) => {
    return dispatch({ type: SHOW_DB });
};
export const showApi = () => (dispatch) => {
    return dispatch({ type: SHOW_API });
};

export const showAll = () => (dispatch) => {
    return dispatch({ type: SHOW_ALL });
};

export const filterInAll = (filtro) => (dispatch) => {
    return dispatch({ type: FILTER_IN_ALL, payload: filtro });
};

export const filterInApi = (filtro) => (dispatch) => {
    return dispatch({ type: FILTER_IN_API, payload: filtro });
};

export const filterInDb = (filtro) => (dispatch) => {
    return dispatch({ type: FILTER_IN_DB, payload: filtro });
};

export const filterInRender = (filtro) => (dispatch) => {
    return dispatch({ type: FILTER_IN_RENDER, payload: filtro });
};

export const cleanForm = () => (dispatch) => {
    return dispatch({ type:CLEAN_FORM})
}