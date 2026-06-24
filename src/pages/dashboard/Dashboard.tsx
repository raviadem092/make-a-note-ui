import {
    FiCheckCircle,
    FiClock,
    FiAlertCircle,
    FiClipboard
} from "react-icons/fi";

import StatCard from "../dashboard/StatCard/StatCard";

import "./Dashboard.css";
import ActivityTimeline from "../dashboard/Activity Timeline/ActivityTimeline";
import RecentTasks from "../dashboard/Recent Tasks/RecentTasks";
const Dashboard = () => {

    const stats = [
        {
            title: "Total Tasks",
            value: 128,
            icon: <FiClipboard />
        },
        {
            title: "Completed",
            value: 84,
            icon: <FiCheckCircle />
        },
        {
            title: "In Progress",
            value: 32,
            icon: <FiClock />
        },
        {
            title: "Overdue",
            value: 12,
            icon: <FiAlertCircle />
        }
    ];

    return (
        <div className="dashboard">

            <section className="dashboard-banner">

                <h1>
                    Good Morning, Ravi 👋
                </h1>

                <p>
                    Here's what's happening with your workspace today.
                </p>

            </section>

            <section className="stats-grid">

                {stats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                    />
                ))}

            </section>
            <section className="dashboard-content">
                <ActivityTimeline />
                <RecentTasks />
            </section>
        </div>
    );
};

export default Dashboard;