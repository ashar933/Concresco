export const addToCart=(cake, variant, choice)=>(dispatch, getState)=>{

    var cartItem = {
        name : cake.name,
        _id : cake._id,
        image : cake.image, 
        variant : variant,
        choice : choice,
        prices : cake.prizes,
        price : cake.prices[0][variant]
    }


    dispatch({type: 'ADD_TO_CART', payload: cartItem})

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart=(cake)=>(dispatch, getState)=>{

    dispatch({type:'DELETE_FROM_CART', payload:cake})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const removeFromCart=(cake)=>(dispatch, getState)=>{

    dispatch({type:'REMOVE_FROM_CART', payload:cake})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}