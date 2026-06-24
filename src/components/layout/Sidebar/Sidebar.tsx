import {
    FaChartBar,
    FaCog,
    FaTasks,
    FaUser
} from "react-icons/fa";

import {
    useState,
    useRef,
    useEffect
} from "react";

import { NavLink } from "react-router-dom";

import { ROUTES } from "../../../constants/routeConstants";
import { useAuth } from "../../../hooks/useAuth";

import "./Sidebar.css";

const Sidebar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);

    const {
        user,
        logout
    } = useAuth();
    useEffect(() => {

        const handleClickOutside = (
            event: MouseEvent
        ) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target as Node
                )
            ) {
                setIsMenuOpen(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <h1>TaskFlow</h1>
            </div>

            <nav className="sidebar-nav">

                <NavLink
                    to={ROUTES.DASHBOARD}
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <FaChartBar />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to={ROUTES.BOARD}
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <FaTasks />
                    <span>Board</span>
                </NavLink>

                <NavLink
                    to={ROUTES.ANALYTICS}
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <FaChartBar />
                    <span>Analytics</span>
                </NavLink>

                <NavLink
                    to={ROUTES.PROFILE}
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <FaUser />
                    <span>Profile</span>
                </NavLink>

                <NavLink
                    to={ROUTES.SETTINGS}
                    className={({ isActive }) =>
                        isActive
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <FaCog />
                    <span>Settings</span>
                </NavLink>

            </nav>

            <div
                className="sidebar-footer"
                ref={menuRef}
            >

                {isMenuOpen && (
                    <div className="account-menu">

                        <NavLink
                            to={ROUTES.PROFILE}
                            className="account-menu-item"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaUser />
                            <span>Profile</span>
                        </NavLink>

                        <NavLink
                            to={ROUTES.SETTINGS}
                            className="account-menu-item"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaCog />
                            <span>Settings</span>
                        </NavLink>

                        <div className="menu-divider" />

                        <button
                            className="account-menu-item logout-item"
                            onClick={logout}
                        >
                            Sign Out
                        </button>

                    </div>
                )}

                <button
                    className="user-card"
                    onClick={() =>
                        setIsMenuOpen(prev => !prev)
                    }
                >

                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt={user.name}
                            className="user-avatar"
                        />
                    ) : (
                        <div className="avatar">
                            {user?.name?.charAt(0)}
                        </div>
                    )}

                    <div className="user-info">

                        <p>
                            {user?.name}
                        </p>

                        <small>
                            {user?.email}
                        </small>

                    </div>

                </button>

            </div>

        </aside>
    );
};

export default Sidebar;