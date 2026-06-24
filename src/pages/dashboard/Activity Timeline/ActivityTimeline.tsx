import "./ActivityTimeline.css";

const activities = [
    {
        id: 1,
        title: "Task Completed",
        description: "Build Login Page",
        time: "10 mins ago"
    },
    {
        id: 2,
        title: "Task Created",
        description: "Create Dashboard",
        time: "30 mins ago"
    },
    {
        id: 3,
        title: "Task Updated",
        description: "Theme Context",
        time: "1 hour ago"
    }
];

const ActivityTimeline = () => {
    return (
        <div className="dashboard-card">

            <h3>
                Activity Timeline
            </h3>

            <div className="timeline">

                {
                    activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="timeline-item"
                        >

                            <div className="timeline-dot" />

                            <div>

                                <h4>
                                    {activity.title}
                                </h4>

                                <p>
                                    {activity.description}
                                </p>

                                <small>
                                    {activity.time}
                                </small>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default ActivityTimeline;