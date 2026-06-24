import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../pages/dashboard/Dashboard";
import Board from "../pages/board/Board";
import Analytics from "../pages/analytics/Analytics";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import Login from "../pages/auth/Login";

import {
    ROUTES
} from "../constants/routeConstants";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Route */}
                <Route
                    path={ROUTES.LOGIN}
                    element={<Login />}
                />
                {/* Protected Routes */}
                <Route
                    element={<ProtectedRoute />}
                >

                    <Route
                        element={<MainLayout />}
                    >

                        <Route
                            path={ROUTES.DASHBOARD}
                            element={<Dashboard />}
                        />

                        <Route
                            path={ROUTES.BOARD}
                            element={<Board />}
                        />

                        <Route
                            path={ROUTES.ANALYTICS}
                            element={<Analytics />}
                        />

                        <Route
                            path={ROUTES.SETTINGS}
                            element={<Settings />}
                        />

                        <Route
                            path={ROUTES.PROFILE}
                            element={<Profile />}
                        />

                    </Route>

                </Route>
                {/* Default Redirect */}
                <Route
                    path="*"
                    element={
                        <Navigate
                            to={ROUTES.DASHBOARD}
                            replace
                        />
                    }
                />
            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;