import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../action.enum";
import { UserAction } from "../../action/user/action.user";

export function userReducer(state:IUser|null|undefined,action:UserAction):IUser|null{
switch(action.type){
    case EACTIONS.LOGGED_IN:
        return action.payload;
        case EACTIONS.LOGGED_OUT:
            return action.payload;
            default:
                return state?state:null;
}
}