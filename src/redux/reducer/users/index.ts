import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../action.enum";
import { UsersAction } from "../../action/users/action.users";
const initialUsers:Array<IUser>=[
    { name: "ali kashefi", phone: "01236", id: "1", username: "ali khashefi" },
    { name: "hamid kazemi", phone: "0123455555", id: "2", username: "hamid kazemi" },
    { name: "chiman hashemi", phone: "0123555555", id: "3", username: "chiman hashemi" },
    { name: "arezoo kheirabadi", phone: "012355555", id: "4", username: "arezoo kheirabadi" },
    { name: "madi hatami", phone: "0155555235", id: "5", username: "mahdi hatami" },
]
export function usersReduser(state:Array<IUser>=initialUsers,action:UsersAction):Array<IUser>{
    switch(action.type){
        case EACTIONS.UPDATE_USERS:
            return action.payload;
            default:
                return state?state:initialUsers;
    }
}