import "./PageHeader.css";

interface Props {
    title: string;
    subtitle?: string;
    action?: React.ReactNode;
}

const PageHeader = ({
    title,
    subtitle,
    action
}: Props) => {

    return (
        <div className="page-header">

            <div>

                <h1>{title}</h1>

                {subtitle && (
                    <p>{subtitle}</p>
                )}

            </div>

            {action}

        </div>
    );
};

export default PageHeader;