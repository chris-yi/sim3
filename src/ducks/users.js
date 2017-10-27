const initialState = {
    user: {},
    page: ''
}

const GET_PAGE = 'GET_PAGE'

export function getCurrentPage(page){
    return {
        type: GET_PAGE,
        payload: page
    }
}


export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_PAGE:

        return Object.assign({}, state, {page: action.payload})

        default:
        return state;
    }
}