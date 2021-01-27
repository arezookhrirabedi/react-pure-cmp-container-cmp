import { Action } from "redux";
import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../action.enum";


export interface UserAction extends Action <EACTIONS>{
    payload:IUser|null
}
