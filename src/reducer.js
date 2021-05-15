export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITEMIN BASKET
            return {
                ...state,
                basket: [...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR removing from basket
           const newbasket = [...state.basket];
           const indexToBeReomved=newbasket.findIndex((item) => item.id===action.id)
           if(indexToBeReomved>=0){
            newbasket.splice(indexToBeReomved,1);
           }
            return { 
                ...state,
                basket: newbasket
             };
        default:
            return state;
    }
}

export default reducer;
