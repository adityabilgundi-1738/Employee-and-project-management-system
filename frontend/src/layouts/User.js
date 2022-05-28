import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import UserNavbar from "components/Navbars/UserNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import UserNavbar from "components/Navbars/UserNavbar";

const User = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop,key) => {
            if(prop.layout === "/user"){
                return(
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            else{
                return null;
            }
        })
    };

    const getBrandText = (path) => {
        for(let i = 0 ; i < routes.length; i++){
            if(props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==-1){
                return routes[i].name;
            }
        }
        return "Brand";
    };

    return(
        <>
            <Sidebar
                {...props}
                routes={routes}
                logo={{
                    innerLink: "/user/index",
                    imgSrc: require("../assets/img/brand/brand.png"),
                    imgAlt: "..."
                }}
            />
            <div classname="mainContent" ref={mainContent}>
                <UserNavbar
                    {...props}
                    brandText={getBrandText(props.location.pathname)}
                />
                <Switch>
                    {getRoutes(routes)}
                    <Redirect from="*" to="/user/index"/>
                </Switch>
                <Container>
                    <UserFooter/>
                </Container>
            </div>
        </>
    );
};

export default User;