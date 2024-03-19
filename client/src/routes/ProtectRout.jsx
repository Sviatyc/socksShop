import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectRout = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined && token !== '') {
        return children
    }else{
        <Navigate to={'/login'}/>
    }
}
ProtectRout.propTypes = {
    children: PropTypes.node
};
