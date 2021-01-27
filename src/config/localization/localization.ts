import { en } from "./en";

interface ILocalization {
  [key: string]: any;
  arezoo_login:string;
  login:string;
  username:string;
  password:string;
  name:string;
  phone:string;
  edit:string;
  delete:string;
}

export const Localization: ILocalization = en;
