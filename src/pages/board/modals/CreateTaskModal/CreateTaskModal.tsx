import { useState } from "react";
import Modal from "../Modal";
import type { TaskPriority } from "../../../../types/board.types";
import "./CreateTaskModal.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSave: (
        title: string,
        description: string,
        priority: TaskPriority
    ) => void;
}

const CreateTaskModal = ({
    isOpen,
    onClose,
    onSave
}: Props) => {

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [priority, setPriority] =
        useState<TaskPriority>(
            "Medium"
        );

    const handleSave = () => {

        if (!title.trim()) {
            return;
        }

        onSave(
            title,
            description,
            priority
        );

        setTitle("");
        setDescription("");
        setPriority("Medium");

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            title="Create Task"
            onClose={onClose}
        >

            <div className="task-form">

                <div className="form-group">

                    <label>
                        Task Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        placeholder="Enter task title"
                        onChange={(e) =>
                            setTitle(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="form-group">

                    <label>
                        Description
                    </label>

                    <textarea
                        rows={4}
                        value={description}
                        placeholder="Enter description"
                        onChange={(e) =>
                            setDescription(
                                e.target.value
                            )
                        }
                    />

                </div>

                <div className="form-group">

                    <label>
                        Priority
                    </label>

                    <select
                        value={priority}
                        onChange={(e) =>
                            setPriority(
                                e.target
                                    .value as TaskPriority
                            )
                        }
                    >
                        <option value="Low">
                            Low
                        </option>

                        <option value="Medium">
                            Medium
                        </option>

                        <option value="High">
                            High
                        </option>
                    </select>

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
                        Create Task
                    </button>

                </div>

            </div>

        </Modal>
    );
};

export default CreateTaskModal;