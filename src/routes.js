import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

export const routes = [
  // {
  //   path: "/login",
  //   name: "LOGIN",
  //   icon: "ni ni-folder-17 text-green",
  //   component: Login,
  //   layout: "/admin",
  // },
  // {
  //   path: "/register",
  //   name: "REGISTER",
  //   icon: "ni ni-folder-17 text-green",
  //   component: Register,
  //   layout: "/admin",
  // },
  {
    path: "/index",
    name: "DASHBOARD",
    icon: "ni ni-folder-17 text-green",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "COMPLAINT PAGE",
    icon: "ni ni-book-bookmark text-green",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "FARMING TIPS",
    icon: "ni ni-bell-55 text-green",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "PROFILE",
    icon: "ni ni-circle-08 text-green",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "REPORTS",
    icon: "ni ni-single-copy-04 text-green",
    component: Tables,
    layout: "/admin",
  },

  {
    path: "/index",
    name: "LOGOUT",
    icon: "ni ni-button-power text-danger",
    component: Index,
    layout: "/admin",
  },
];
export const farmer = [
  {
    path: "/index",
    name: "DASHBOARD",
    icon: "ni ni-folder-17 text-green",
    component: Index,
    layout: "/farmer",
  },
  {
    path: "/icons",
    name: "SELL PRODUCTS",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/farmer",
  },
  {
    path: "/maps",
    name: "MAPS",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/farmer",
  },
  {
    path: "/user-profile",
    name: "PROFILE",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/farmer",
  },
  {
    path: "/tables",
    name: "REPORTS",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/farmer",
  },
];
export const supplier = [
  {
    path: "/index",
    name: "DASHBOARD",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/supplier",
  },
  {
    path: "/icons",
    name: "SELL PRODUCTS",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/supplier",
  },
  {
    path: "/maps",
    name: "MAPS",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/supplier",
  },
  {
    path: "/user-profile",
    name: "PROFILE",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/supplier",
  },
  {
    path: "/tables",
    name: "REPORTS",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/supplier",
  },
];
