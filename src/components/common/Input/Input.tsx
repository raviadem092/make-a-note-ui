import "./Input.css";

interface Props {
    label?: string;
    value: string;
    placeholder?: string;
    type?: string;
    onChange: (
        e: React.ChangeEvent<
            HTMLInputElement
        >
    ) => void;
}

const Input = ({
    label,
    value,
    placeholder,
    type = "text",
    onChange
}: Props) => {

    return (
        <div className="input-group">

            {label && (
                <label>
                    {label}
                </label>
            )}

            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />

        </div>
    );
};

export default Input;