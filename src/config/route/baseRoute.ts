import { EROUTE_NAME } from "./route";
import { EROUT } from "./routes";

interface IRouteBase {
  name: string;
 // breadcrumbVisible: boolean;
  sidebarVisible: boolean;
  icon?: string;
}


export interface IRoute extends IRouteBase {
  path: string;
}

export type IAppRoute = Array<IRoute>;

export class AppRoute {
  private static readonly routes: IAppRoute = [
    {
      path: EROUT.USERS,
      name: EROUTE_NAME.USERS,
      sidebarVisible: false,
      icon: "fa fa-dashboard",
    },
    {
      path: EROUT.PROFILE,
      name:EROUTE_NAME.PROFILE ,
      sidebarVisible: true,
      icon: "fa fa-picture-o",
    },
    {
      path: EROUT.SEARCH,
      name:EROUTE_NAME.SEARCH ,
      sidebarVisible: true,
      icon: "fa fa-search-o",
    },
    {
      path: EROUT.MESSAGE,
      name:EROUTE_NAME.MESSAGE,
      icon: "fa fa-link",
      sidebarVisible: true,
    },
  ];

  static getRoutes(): IAppRoute {
    return this.routes;
  }
}
