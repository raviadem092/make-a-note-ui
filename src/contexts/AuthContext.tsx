import {
    createContext,
    useEffect,
    useState
} from "react";

import {
    onAuthStateChanged
} from "firebase/auth";

import { auth } from "../services/auth/firebase";

import {
    loginWithGoogle,
    loginWithGithub,
    logout
} from "../services/auth/authService";

import type {
    AuthUser
} from "../types/auth.types";

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;

    loginWithGoogle: () => Promise<void>;
    loginWithGithub: () => Promise<void>;

    logout: () => Promise<void>;
}

export const AuthContext =
    createContext<AuthContextType | null>(
        null
    );

export const AuthProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {

    const [user, setUser] =
        useState<AuthUser | null>(
            null
        );

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const unsubscribe =
            onAuthStateChanged(
                auth,
                (firebaseUser) => {

                    console.log(
                        "Auth User:",
                        firebaseUser
                    );

                    if (
                        firebaseUser
                    ) {

                        setUser({
                            uid:
                                firebaseUser.uid,

                            name:
                                firebaseUser.displayName ||
                                "",

                            email:
                                firebaseUser.email ||
                                "",

                            photoURL:
                                firebaseUser.photoURL ||
                                ""
                        });

                    } else {

                        setUser(null);

                    }

                    setLoading(false);
                }
            );

        return unsubscribe;

    }, []);

    const handleGoogleLogin =
        async () => {

            await loginWithGoogle();

        };

    const handleGithubLogin =
        async () => {

            await loginWithGithub();

        };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,

                loginWithGoogle:
                    handleGoogleLogin,

                loginWithGithub:
                    handleGithubLogin,

                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};