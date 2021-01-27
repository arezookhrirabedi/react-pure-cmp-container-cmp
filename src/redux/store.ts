import { AnyAction, combineReducers, createStore, Reducer, ReducersMapObject } from "redux";
import { IUser } from "../model/model.user";
import { IReduxState } from "./app.state";
import { userReducer } from "./reducer/user";
import { usersReduser } from "./reducer/users";


const reducers: ReducersMapObject<IReduxState, AnyAction> = {
    logged_in_user: userReducer as Reducer<IUser | null, AnyAction>,
    users: usersReduser as Reducer<Array<IUser>, AnyAction>
    };
    export const root_reducer=combineReducers(reducers)
    export const Store=createStore(root_reducer)