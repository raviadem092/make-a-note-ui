import "./Button.css";

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
}

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false
}: Props) => {

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant}`}
        >
            {children}
        </button>
    );
};

export default Button;