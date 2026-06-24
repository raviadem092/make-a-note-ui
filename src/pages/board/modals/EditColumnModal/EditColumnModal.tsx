import { useEffect, useState } from "react";

import Modal from "../Modal";

import "./EditColumnModal.css";

interface Props {
    isOpen: boolean;
    initialTitle: string;
    onClose: () => void;
    onSave: (title: string) => void;
}

const EditColumnModal = ({
    isOpen,
    initialTitle,
    onClose,
    onSave
}: Props) => {

    const [title, setTitle] =
        useState("");
    
    useEffect(() => {

        if (isOpen) {
            setTitle(initialTitle);
        }

    }, [initialTitle, isOpen]);

    const handleSave = () => {

        if (!title.trim()) {
            return;
        }

        onSave(title);

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            title="Edit Column"
            onClose={onClose}
        >

            <div className="edit-column-form">

                <div className="form-group">

                    <label>
                        Column Name
                    </label>

                    <input
                        type="text"
                        value={title}
                        placeholder="Enter column name"
                        onChange={(e) =>
                            setTitle(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="modal-actions">

                    <button
                        className="btn-secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn-primary"
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>

                </div>

            </div>

        </Modal>
    );
};

export default EditColumnModal;