import type { Column } from "../../../types/board.types";
import TaskCard from "../TaskCard/TaskCard";

import "./TaskColumn.css";

interface Props {
    column: Column;
    onAddTask: (columnId: string) => void;
}

const TaskColumn = ({
    column,
    onAddTask
}: Props) => {

    return (
        <div className="task-column">

            <div className="column-header">

                <h3>
                    {column.title}
                </h3>

                <div className="column-actions">

                    <span>
                        {column.tasks.length}
                    </span>

                    <button
                        className="column-add-btn"
                        onClick={() =>
                            onAddTask(column.id)
                        }
                    >
                        +
                    </button>

                </div>

            </div>

            <div className="column-body">

                {
                    column.tasks.map(
                        (task) => (
                            <TaskCard
                                key={task.id}
                                title={task.title}
                                priority={task.priority}
                            />
                        )
                    )
                }

            </div>

        </div>
    );
};

export default TaskColumn;