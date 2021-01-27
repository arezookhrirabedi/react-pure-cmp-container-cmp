import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../action.enum";

export function action_updateUsers(users:Array<IUser>){
    return({
        type:EACTIONS.UPDATE_USERS,
        payload:users,
    });
}