import { useState } from "react";

import Modal from "../Modal";

import "./CreateColumnModal.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSave: (title: string) => void;
}

const CreateColumnModal = ({
    isOpen,
    onClose,
    onSave
}: Props) => {

    const [title, setTitle] =
        useState("");

    const handleSave = () => {

        if (!title.trim()) {
            return;
        }

        onSave(title);

        setTitle("");

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            title="Create Column"
            onClose={onClose}
        >

            <div className="create-column-form">

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
                        Create Column
                    </button>

                </div>

            </div>

        </Modal>
    );
};

export default CreateColumnModal;