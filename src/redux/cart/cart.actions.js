import CartActionTypes from "./cart.types";

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const toggleDropDown = () => ({
    type: CartActionTypes.TOGGLE_DROPDOWN
});