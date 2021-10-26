export const addItemToCart = (itemsInCart, itemToAdd)=> {
    const existingCartItem = itemsInCart.find(
        itemInCart => itemInCart.id === itemToAdd.id
    );

    if(existingCartItem){
        // ADD CODE BELOW TO ADD QUANTITY FUNCTIONALITY. 
        // return itemsInCart.map(itemInCart => 
        //     itemInCart.id === itemToAdd.id ? 
        //     {...itemInCart, quantity: itemInCart.quantity + 1} :
        //     itemInCart
        // )
        return [...itemsInCart]
    }

    return [...itemsInCart, {...itemToAdd}]

    // ADD THE FOLLOWING TO ITEM TO ADD OBJECT TO ADD QUANTITY FUNCTIONALITY
    // quantity: 1
}