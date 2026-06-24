import {
    useEffect
} from "react";

import "./Modal.css";

interface ModalProps {
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
}: ModalProps) => {

    useEffect(() => {

        const handleEscape = (
            event: KeyboardEvent
        ) => {

            if (
                event.key === "Escape"
            ) {
                onClose();
            }

        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="modal"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                <div className="modal-header">

                    <h2>
                        {title}
                    </h2>

                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Close Modal"
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