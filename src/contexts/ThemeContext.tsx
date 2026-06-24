import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

export type ThemeType =
    | "light"
    | "dark";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (
        theme: ThemeType
    ) => void;
    toggleTheme: () => void;
}

const ThemeContext =
    createContext<
        ThemeContextType | undefined
    >(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({
    children
}: ThemeProviderProps) => {

    const [theme, setTheme] =
        useState<ThemeType>(() => {

            const savedTheme =
                localStorage.getItem(
                    "theme"
                ) as ThemeType;

            return savedTheme || "light";
        });

    useEffect(() => {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem(
            "theme",
            theme
        );

    }, [theme]);

    const toggleTheme = () => {

        setTheme((prevTheme) =>
            prevTheme === "light"
                ? "dark"
                : "light"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {

    const context =
        useContext(
            ThemeContext
        );

    if (!context) {
        throw new Error(
            "useTheme must be used within ThemeProvider"
        );
    }

    return context;
};