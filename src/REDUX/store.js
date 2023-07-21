import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"

import { reducer as SideBarReducer } from "./SideBarReducer/reducer";
import { reducer as BuyerReducer } from "./BuyerReducer/reducer";
import { reducer as TableReducer } from "./TableReducer/reducer";
import { reducer as SideBarItemReducer } from "./SideBarItemReducer/reducer";

const rootReducer = combineReducers({
    SideBarReducer,
    BuyerReducer,
    TableReducer,
    SideBarItemReducer


})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))