import "./TaskCard.css";

interface TaskCardProps {
    title: string;
    priority: string;
}

const TaskCard = ({
    title,
    priority
}: TaskCardProps) => {

    return (
        <div className="task-card">

            <h4>
                {title}
            </h4>

            <span
                className={`priority ${priority.toLowerCase()}`}
            >
                {priority}
            </span>

        </div>
    );
};

export default TaskCard;