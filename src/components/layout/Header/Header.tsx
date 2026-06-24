import {
    FiBell,
    FiMoon,
    FiSun
} from "react-icons/fi";

import { useTheme } from "../../../contexts/ThemeContext";

import { useAuth } from "../../../hooks/useAuth";

import "./Header.css";

const Header = () => {

    const {
        theme,
        toggleTheme
    } = useTheme();

    const {
        user
    } = useAuth();

    return (
        <header className="header">

            <div className="header-left">

                <h2>
                    Welcome Back,
                    {" "}
                    {user?.name?.split(" ")[0]}
                    {" "}
                    👋
                </h2>

            </div>

            <div className="header-right">

                <button className="icon-btn">
                    <FiBell />
                </button>

                <button
                    className="icon-btn"
                    onClick={toggleTheme}
                >
                    {
                        theme === "light"
                            ? <FiMoon />
                            : <FiSun />
                    }
                </button>
{/* 
                {
                    user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt={user.name}
                            className="header-avatar"
                        />
                    ) : (
                        <div className="profile-avatar">
                            {user?.name?.charAt(0)}
                        </div>
                    )
                } */}

            </div>

        </header>
    );
};

export default Header;