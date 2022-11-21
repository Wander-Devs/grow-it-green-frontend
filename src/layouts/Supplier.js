import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import SupplierNavbar from "components/Navbars/SupplierNavbar.js";
import FarmerFooter from "components/Footers/FarmerFooter.js";
import Sidevar from "../components/Sidebar/Sidevar";
import { supplier } from "routes";

const Supplier = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (supplier) => {
    return supplier.map((prop, key) => {
      if (prop.layout === "/supplier") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < supplier.length; i++) {
      if (
        props.location.pathname.indexOf(
          supplier[i].layout + supplier[i].path
        ) !== -1
      ) {
        return supplier[i].name;
      }
    }
    return "Click";
  };

  return (
    <>
      <Sidevar
        {...props}
        supplier={supplier}
        logo={{
          innerLink: "/supplier/index",
          imgSrc: require("../assets/img/brand/logo9.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <SupplierNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(supplier)}
          <Redirect from="*" to="/supplier/index" />
        </Switch>
        <Container fluid>
          {/* <Home /> */}
          <FarmerFooter />
        </Container>
      </div>
    </>
  );
};

export default Supplier;
