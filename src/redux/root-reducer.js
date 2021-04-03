import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'
import directoryReducer from './directory/directory-reducer'
import shopReducer from './shop/shop-reducer'

import storage from 'redux-persist/lib/storage'

const persisterConfig = {
    key: 'root',
    storage,
    wishlist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persisterConfig, rootReducer)