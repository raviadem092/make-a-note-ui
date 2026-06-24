import Modal from "../Modal/Modal";
import Button from "../Button/Button";

interface Props {
    isOpen: boolean;
    title: string;
    message: string;

    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDialog = ({
    isOpen,
    title,
    message,
    onClose,
    onConfirm
}: Props) => {

    return (
        <Modal
            isOpen={isOpen}
            title={title}
            onClose={onClose}
        >

            <p>
                {message}
            </p>

            <div className="modal-actions">

                <Button
                    variant="secondary"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="danger"
                    onClick={onConfirm}
                >
                    Delete
                </Button>

            </div>

        </Modal>
    );
};

export default ConfirmDialog;