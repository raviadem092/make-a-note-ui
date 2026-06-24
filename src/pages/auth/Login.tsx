import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import "./Login.css";

const Login = () => {

    const navigate = useNavigate();

    const {
        loginWithGoogle,
        loginWithGithub
    } = useAuth();

    const handleGoogleLogin = async () => {

        try {

            await loginWithGoogle();

            navigate("/dashboard");

        } catch (error) {

            console.error(error);

        }

    };

    const handleGithubLogin = async () => {

        try {

            await loginWithGithub();

            navigate("/dashboard");

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="login-page">

            <div className="bg-orb orb-1" />
            <div className="bg-orb orb-2" />

            <div className="login-card">

                <div className="login-logo">
                    <img src="/taskflow-logo.svg" width="100" alt="logo" />
                </div>

                <h1>
                    Welcome to TaskFlow
                </h1>

                <p>
                    Organize tasks, collaborate faster,
                    and stay focused.
                </p>

                <button
                    className="oauth-btn google-btn"
                    onClick={handleGoogleLogin}
                >
                    <FcGoogle />
                    <span>
                        Continue with Google
                    </span>
                </button>

                {/* <button
                    className="oauth-btn github-btn"
                    onClick={handleGithubLogin}
                >
                    <FaGithub />
                    <span>
                        Continue with GitHub
                    </span>
                </button> */}

                <div className="login-footer">
                    Secure authentication powered by Firebase
                </div>

            </div>

        </div>

    );

};

export default Login;