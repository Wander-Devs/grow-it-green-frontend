import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Login from "views/admin/Login";
import Register from "views/admin/Register";
import FarmerLayout from "layouts/Farmer.js";
import SupplierLayout from "layouts/Supplier";
import ContactUs from "views/admin/ContactUs";
//import Login from "views/examples/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/farmer" render={(props) => <FarmerLayout {...props} />} />
      <Route
        path="/supplier"
        render={(props) => <SupplierLayout {...props} />}
      />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Route path="/contactus" render={(props) => <ContactUs {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>
);
