const initialState = {
    list: 'InitialState'
}

export const words =( state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_DO":
            return  {
                list: action.word
            };
        default:
            return state;
    }
}

export default words;

