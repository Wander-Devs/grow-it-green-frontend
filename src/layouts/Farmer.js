import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import FarmerNavbar from "components/Navbars/FarmerNavbar.js";
import FarmerFooter from "components/Footers/FarmerFooter.js";
import Sidebars from "components/Sidebar/Sidebars";
import { farmer } from "routes";

// import routes from "routes.js";

const Farmer = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (farmer) => {
    return farmer.map((prop, key) => {
      if (prop.layout === "/farmer") {
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
    for (let i = 0; i < farmer.length; i++) {
      if (
        props.location.pathname.indexOf(farmer[i].layout + farmer[i].path) !==
        -1
      ) {
        return farmer[i].name;
      }
    }
    return "Click";
  };

  return (
    <>
      <Sidebars
        {...props}
        farmer={farmer}
        logo={{
          innerLink: "/farmer/index",
          imgSrc: require("../assets/img/brand/logo9.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <FarmerNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(farmer)}
          <Redirect from="*" to="/farmer/index" />
        </Switch>
        <Container fluid>
          {/* <Home /> */}
          <FarmerFooter />
        </Container>
      </div>
    </>
  );
};

export default Farmer;
