const initState = {
    todos: [],
};

const reducer = (state = initState , action) => {
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                todos: [...state.todos,action.payload],
            };
        case 'DELETE':
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        
        default:
            return state;
    }
}

export default reducer;