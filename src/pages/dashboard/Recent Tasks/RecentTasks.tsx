import "./RecentTasks.css";

const tasks = [
    {
        id: 1,
        title: "Build Dashboard",
        status: "In Progress"
    },
    {
        id: 2,
        title: "Implement Firebase",
        status: "Pending"
    },
    {
        id: 3,
        title: "Create Kanban Board",
        status: "Pending"
    }
];

const RecentTasks = () => {
    return (
        <div className="dashboard-card">

            <h3>
                Recent Tasks
            </h3>

            {
                tasks.map((task) => (
                    <div
                        key={task.id}
                        className="task-row"
                    >

                        <span>
                            {task.title}
                        </span>

                        <span
                            className="task-status"
                        >
                            {task.status}
                        </span>

                    </div>
                ))
            }

        </div>
    );
};

export default RecentTasks;