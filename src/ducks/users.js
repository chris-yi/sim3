const initialState = {
    user: {test: 'hello'}
}


export default function reducer(state=initialState, action) {
    switch(action.type) {
        default:
        return state;
    }
}