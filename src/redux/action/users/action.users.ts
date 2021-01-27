import { Action } from "redux";
import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../action.enum";

export interface UsersAction extends Action<EACTIONS>{
    payload:Array<IUser>;
}