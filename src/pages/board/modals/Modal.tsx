import "./Modal.css";

interface Props {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({
    isOpen,
    title,
    onClose,
    children
}: Props) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">

            <div className="modal">

                <div className="modal-header">

                    <h2>
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                <div className="modal-body">
                    {children}
                </div>

            </div>

        </div>
    );
};

export default Modal;