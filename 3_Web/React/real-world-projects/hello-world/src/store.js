import { configureStore } from '@reduxjs/toolkit'

function productsReducer(state={},action){
    return {
        products:[
            { title: 'Cabbage', isFruit: false, id: 1 },
            { title: 'Garlic', isFruit: false, id: 2 },
            { title: 'Apple', isFruit: true, id: 3 },
        ],
    }
};

function cartReducer(state={},action){
    return {
        cart: {}
    }
};

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
})