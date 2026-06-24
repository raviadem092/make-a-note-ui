import {
    Navigate,
    Outlet
} from "react-router-dom";

import {
    ROUTES
} from "../constants/routeConstants";

import {
    useAuth
} from "../hooks/useAuth";

import Loader from "../components/common/Loader/Loader";

const ProtectedRoute = () => {

    const {
        user,
        loading
    } = useAuth();

    if (loading) {

        return (
            <Loader />
        );

    }

    if (!user) {

        return (
            <Navigate
                to={ROUTES.LOGIN}
                replace
            />
        );

    }

    return <Outlet />;
};

export default ProtectedRoute;