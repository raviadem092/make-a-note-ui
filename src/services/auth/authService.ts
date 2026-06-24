import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

import { auth } from "./firebase";

const googleProvider =
    new GoogleAuthProvider();

const githubProvider =
    new GithubAuthProvider();

export const loginWithGoogle =
    async () => {

        const result =
            await signInWithPopup(
                auth,
                googleProvider
            );

        return result.user;
    };

export const loginWithGithub =
    async () => {

        const result =
            await signInWithPopup(
                auth,
                githubProvider
            );

        return result.user;
    };

export const logout =
    async () => {

        await signOut(auth);

    };