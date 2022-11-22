import Index from "views/Index.js";
import Profile from "views/admin/Profile.js";
import Maps from "views/admin/FarmingTips";
import Tables from "views/admin/Complaint";
import Icons from "views/admin/FarmingTips";
import Auth from "layouts/Auth";
import SellProduct from "views/farmer/SellProduct";
import ComplaintPage from "views/farmer/ComplaintPage";
import ComplaintStatus from "views/farmer/ComplaintStatus";
import CropAdvertisement from "views/farmer/CropAdvertisement";
import TrainingScheduling from "views/farmer/TrainingScheduling";
import PaymentReceipt from "views/farmer/Payment Receipt";
import Reports from "views/farmer/Reports";
import FarmerProfile from "views/farmer/FarmerProfile";
import Complaint from "views/admin/Complaint";
import FarmingTips from "views/admin/FarmingTips";
import UserList from "views/admin/UserList";
import SupplierProfile from "views/supplier/Profile";
import CropReceived from "views/supplier/CropReceived";

export const routes = [
  {
    path: "/index",
    name: " ADMIN DASHBOARD",
    icon: "ni ni-folder-17 text-green",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/Complaint",
    name: "COMPLAINT PAGE",
    icon: "ni ni-book-bookmark text-green",
    component: Complaint,
    layout: "/admin",
  },
  {
    path: "/FarmingTips",
    name: "FARMING TIPS",
    icon: "ni ni-bell-55 text-green",
    component: FarmingTips,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "USER LIST",
    icon: "ni ni-circle-08 text-green",
    component: UserList,
    layout: "/admin",
  },

  {
    path: "/user-profile",
    name: "LOGOUT",
    icon: "ni ni-button-power text-danger",
    component: Auth,
    layout: "/admin",
  },
];
export const farmer = [
  {
    path: "/index",
    name: "FARMER DASHBOARD",
    icon: "ni ni-folder-17 text-green",
    component: Index,
    layout: "/farmer",
  },
  {
    path: "/SellProduct",
    name: "SELL PRODUCT",
    icon: "ni ni-bag-17 text-green",
    component: SellProduct,
    layout: "/farmer",
  },
  {
    path: "/ComplaintPage",
    name: "COMPLAINT PAGE",
    icon: "ni ni-bell-55 text-green",
    component: ComplaintPage,
    layout: "/farmer",
  },

  {
    path: "/ComplaintStatus",
    name: "COMPLAINT STATUS",
    icon: "ni ni-single-copy-04 text-green",
    component: ComplaintStatus,
    layout: "/farmer",
  },

  {
    path: "/CropAdvertisement",
    name: "CROP ADVERTISEMENTS",
    icon: "ni ni-briefcase-24 text-green",
    component: CropAdvertisement,
    layout: "/farmer",
  },
  {
    path: "/TrainingScheduling",
    name: "TRAINING SCHEDULING",
    icon: "ni ni-book-bookmark text-green",
    component: TrainingScheduling,
    layout: "/farmer",
  },
  {
    path: "/PaymentReceipt",
    name: "PAYMENT RECEIPT",
    icon: "ni ni-books text-green",
    component: PaymentReceipt,
    layout: "/farmer",
  },
  {
    path: "/Reports",
    name: "REPORTS",
    icon: "ni ni-bulb-61 text-green",
    component: Reports,
    layout: "/farmer",
  },
  {
    path: "/FarmerProfile",
    name: "PROFILE",
    icon: "ni ni-circle-08 text-green",
    component: FarmerProfile,
    layout: "/farmer",
  },

  {
    path: "/FarmerProfile",
    name: "LOGOUT",
    icon: "ni ni-button-power text-danger",
    component: Auth,
    layout: "/auth/login",
  },
];
export const supplier = [
  {
    path: "/index",
    name: "SUUPLIER DASHBOARD",
    icon: "ni ni-tv-2 text-green",
    component: Index,
    layout: "/supplier",
  },
  {
    path: "/PostAdvertisement",
    name: "SELL PRODUCTS",
    icon: "ni ni-planet text-green",
    component: Icons,
    layout: "/supplier",
  },
  {
    path: "/CropReceived",
    name: "CROP RECEIVED",
    icon: "ni ni-pin-3 text-green",
    component: CropReceived,
    layout: "/supplier",
  },
  {
    path: "/CropPayment",
    name: "PROFILE",
    icon: "ni ni-single-02 text-green",
    component: Profile,
    layout: "/supplier",
  },
  {
    path: "/SupplierProfile",
    name: "LOGOUT",
    icon: "ni ni-button-power text-danger",
    component: Auth,
    layout: "/auth/login",
  },
];
