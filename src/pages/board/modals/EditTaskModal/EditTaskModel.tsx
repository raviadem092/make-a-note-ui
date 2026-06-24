import {
    useEffect,
    useState
} from "react";

import Modal from "../Modal";

import type {
    Task,
    TaskPriority
} from "../../../../types/board.types";

import "..CreateTaskModal/CreateTaskModal.css";

interface Props {
    isOpen: boolean;

    task: Task | null;

    onClose: () => void;

    onSave: (
        taskId: number,
        title: string,
        description: string,
        priority: TaskPriority
    ) => void;
}

const EditTaskModal = ({
    isOpen,
    task,
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

    useEffect(() => {

        if (
            task &&
            isOpen
        ) {

            setTitle(
                task.title
            );

            setDescription(
                task.description || ""
            );

            setPriority(
                task.priority
            );

        }

    }, [task, isOpen]);

    const handleSave = () => {

        if (
            !task ||
            !title.trim()
        ) {
            return;
        }

        onSave(
            task.id,
            title,
            description,
            priority
        );

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            title="Edit Task"
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
                                e.target.value as TaskPriority
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
                        Save Changes
                    </button>

                </div>

            </div>

        </Modal>
    );
};

export default EditTaskModal;