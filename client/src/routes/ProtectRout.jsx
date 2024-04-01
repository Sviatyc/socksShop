import { Navigate } from "react-router-dom";
import { auth } from '../firebase.jsx';
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

export const ProtectRout = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user)
            setAuthChecked(true);
        });

        return () => unsubscribe();
    }, []);

    if (!authChecked) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }


    return children;
}

ProtectRout.propTypes = {
    children: PropTypes.node
};

