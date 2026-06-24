import {
    useEffect,
    useState
} from "react";

import TaskColumn from "../TaskColumn/TaskColumn";

import type {
    BoardState
} from "../../../types/board.types";

import {
    getBoard,
    saveBoard,
    clearBoard
} from "../../../utils/storage";

import "./TaskBoard.css";

const initialBoard: BoardState = {
    columns: [
        {
            id: "todo",
            title: "To Do",
            tasks: [
                {
                    id: 1,
                    title: "Build Login Page",
                    priority: "High"
                }
            ]
        },
        {
            id: "in-progress",
            title: "In Progress",
            tasks: [
                {
                    id: 2,
                    title: "Create Dashboard",
                    priority: "Medium"
                }
            ]
        },
        {
            id: "done",
            title: "Done",
            tasks: [
                {
                    id: 3,
                    title: "Setup Routing",
                    priority: "Low"
                }
            ]
        }
    ]
};

const TaskBoard = () => {

    const [board, setBoard] =
        useState<BoardState>(
            () =>
                getBoard() ||
                initialBoard
        );

    useEffect(() => {
        saveBoard(board);
    }, [board]);

    const addColumn = () => {

        const title =
            prompt(
                "Enter column name"
            );

        if (!title?.trim()) {
            return;
        }

        setBoard((prev) => ({
            columns: [
                ...prev.columns,
                {
                    id: crypto.randomUUID(),
                    title,
                    tasks: []
                }
            ]
        }));
    };

    const addTask = (
        columnId: string
    ) => {

        const title =
            prompt(
                "Enter task name"
            );

        if (!title?.trim()) {
            return;
        }

        setBoard((prev) => ({
            columns: prev.columns.map(
                (column) =>
                    column.id === columnId
                        ? {
                              ...column,
                              tasks: [
                                  ...column.tasks,
                                  {
                                      id: Date.now(),
                                      title,
                                      priority: "Medium"
                                  }
                              ]
                          }
                        : column
            )
        }));
    };

    const handleResetBoard = () => {

        const confirmReset =
            window.confirm(
                "Are you sure you want to reset the board?"
            );

        if (!confirmReset) {
            return;
        }

        clearBoard();

        setBoard(initialBoard);
    };

    return (
        <div className="task-board-container">

            <div className="board-header">

                <h2>
                    Task Board
                </h2>

                <button
                    className="add-btn"
                    onClick={addColumn}
                >
                    + Add Column
                </button>

            </div>

            <div className="board-grid">

                {board.columns.map(
                    (column) => (
                        <TaskColumn
                            key={column.id}
                            column={column}
                            onAddTask={addTask}
                        />
                    )
                )}

            </div>

            <div className="board-footer">

                <button
                    className="danger-btn"
                    onClick={handleResetBoard}
                >
                    Reset Board
                </button>

            </div>

        </div>
    );
};

export default TaskBoard;