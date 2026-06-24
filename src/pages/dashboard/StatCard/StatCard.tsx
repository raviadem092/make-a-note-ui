import "./StatCard.css";

interface StatCardProps {
    title: string;
    value: number;
    icon?: React.ReactNode;
}

const StatCard = ({
    title,
    value,
    icon
}: StatCardProps) => {
    return (
        <div className="stat-card">
            <div className="stat-card-header">
                <span>
                    {title}
                </span>
                {icon}
            </div>
            <h2>
                {value}
            </h2>
        </div>
    );
};

export default StatCard;