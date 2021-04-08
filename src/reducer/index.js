
const initialState = {
    pais: {},
    regiones: [],
    region: []
};


export default function reducer(state = initialState, action) {
    if (action.type === "GET_REGIONES") {

        return {
            ...state, regiones: action.payload
        }
    }
    if (action.type === "GET_PAIS") {
        return {
            ...state, pais: action.payload
        }
    }
    if (action.type === "GET_REGION") {
        return {
            ...state, region: action.payload
        }
    }
    else {
        return state
    }
}