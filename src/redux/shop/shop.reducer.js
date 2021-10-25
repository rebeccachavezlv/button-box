import { ShopItems } from "../../shop-items"

const INITIAL_STATE = {
    items: ShopItems,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default shopReducer