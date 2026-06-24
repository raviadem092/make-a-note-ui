import "./EmptyState.css";

interface Props {
    title: string;
    description: string;
}

const EmptyState = ({
    title,
    description
}: Props) => {

    return (
        <div className="empty-state">

            <h3>{title}</h3>

            <p>{description}</p>

        </div>
    );
};

export default EmptyState;