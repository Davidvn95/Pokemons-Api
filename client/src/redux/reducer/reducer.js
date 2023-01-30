import {
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL,
    GET_ALL_TYPES,
    CREATE_POKEMON,
    GET_POKEMON_BY_NAME,
    SEPARATE_LOCATIONS,
    SORT_POKEMONS,
    SHOW_API,
    SHOW_DB,
    SHOW_ALL,
    FILTER_IN_ALL,
    FILTER_IN_DB,
    FILTER_IN_API,
    FILTER_IN_RENDER,
    CLEAN_FORM
} from "../actions/actions.js";

const initialState = {
    pokemons: [],
    types: [],
    detail: {},
    created: {},
    all: [],
    api: [],
    db: [],
    render: [],
    renderCopy: [],
};

export const sortFunction = (order, array) => {
    switch (order) {
        case "A - Z":
            // eslint-disable-next-line
            array.sort((a, b) => a.name?.toLowerCase() < b.name?.toLowerCase() && -1);
            break;
        case "Z - A":
            // eslint-disable-next-line
            array.sort((a, b) => a.name?.toLowerCase() > b.name?.toLowerCase() && -1);
            break;
        case "Attack -":
            // eslint-disable-next-line
            array.sort((a, b) => a.attack < b.attack && -1);
            break;
        case "Attack +":
            // eslint-disable-next-line
            array.sort((a, b) => a.attack > b.attack && -1);
            break;
        default:
            break;
    }
};

export const filterFunction = (type, array) => {
    if (type === "All Types" || type === "") {
        return array.filter((pkm) => pkm.type || pkm.types);
    } else {
        return array.filter((pkm) => pkm.type?.includes(type) || pkm.types?.includes(type));
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAN_FORM:
            return {
                ...state,
                created:{}
            }
        case FILTER_IN_RENDER:
            const filterCopy = filterFunction(action.payload, state.renderCopy);
            return {
                ...state,
                render: [...filterCopy],
            };
        case FILTER_IN_DB:
            const filterDb = filterFunction(action.payload, state.db);
            return {
                ...state,
                render: [...filterDb],
                renderCopy: [...filterDb],
            };
        case FILTER_IN_API:
            const filterApi = filterFunction(action.payload, state.api);
            return {
                ...state,
                render: [...filterApi],
                renderCopy: [...filterApi],
            };
        case FILTER_IN_ALL:
            const filterAll = filterFunction(action.payload, state.all);
            return {
                ...state,
                render: [...filterAll],
                renderCopy: [...filterAll],
            };
        case SORT_POKEMONS:
            sortFunction(action.payload, state.all);
            sortFunction(action.payload, state.api);
            sortFunction(action.payload, state.db);
            sortFunction(action.payload, state.render);
            return {
                ...state,
                all: [...state.all],
                api: [...state.api],
                db: [...state.db],
                render: [...state.render],
                renderCopy: [...state.render],
            };
        case SHOW_ALL:
            return {
                ...state,
                render: [...state.all],
                renderCopy: [...state.all],
            };
        case SHOW_API:
            return {
                ...state,
                render: [...state.api],
                renderCopy: [...state.api],
            };
        case SHOW_DB:
            return {
                ...state,
                render: [...state.db],
                renderCopy: [...state.db],
            };
        case SEPARATE_LOCATIONS:
            const api = state.pokemons.filter((pokemon) => pokemon.id?.toString().length < 5);
            const Db = state.pokemons.filter((pokemon) => pokemon.id?.toString().length >= 5);
            return {
                ...state,
                all: [...state.pokemons],
                render: [...state.pokemons],
                api: [...api],
                db: [...Db],
                created:{}
            };
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                render: [action.payload],
            };
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: [...action.payload],
                render: [...action.payload],
            };
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload,
            };
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                detail: {...action.payload},
            };
        case CREATE_POKEMON:
            return {
                ...state,
                created: { ...action.payload },
            };
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;
