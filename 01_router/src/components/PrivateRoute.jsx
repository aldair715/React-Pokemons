import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
let auth;
auth = true;
const PrivateRoute = () => {
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.any,
};
export default PrivateRoute;
