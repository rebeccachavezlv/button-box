import CartActionTypes from "./cart.types"

const INITIAL_STATE = {
    totalItems: 0,
    itemsInCart: [],
    dropDownHidden: true,
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                totalItems: state.totalItems+1,
                itemsInCart: [...state.itemsInCart, action.payload]
            }
        case CartActionTypes.TOGGLE_DROPDOWN:
            return{
                ...state,
                dropDownHidden: !state.dropDownHidden
            }
        default:
            return state
    }
}

export default cartReducer
