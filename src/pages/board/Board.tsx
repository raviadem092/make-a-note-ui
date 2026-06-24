import TaskBoard from "..//board/TaskBoard/TaskBoard";

const Board = () => {

    return (
        <div>

            <h1
                style={{
                    marginBottom: "24px"
                }}
            >
                Task Board
            </h1>

            <TaskBoard />

        </div>
    );
};

export default Board;