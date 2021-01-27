import { TInternationalization } from "../../config/setup";
import { action_user_logged_out } from "../../redux/action/user";
import { Store } from "../../redux/store";
import { History } from "history";

export interface IBaseProps { internationalization: TInternationalization;
 }
export abstract class BaseComponent<p extends IBaseProps, s = {}, ss = any>{
    async onAppLogout(history: History) {
        Store.dispatch(action_user_logged_out());
        history.push('/login')

    }
}