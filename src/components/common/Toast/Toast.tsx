interface Props {
    message: string;
    type?: "success" | "error";
}

const Toast = ({
    message
}: Props) => {

    return (
        <div className="toast">
            {message}
        </div>
    );
};

export default Toast;