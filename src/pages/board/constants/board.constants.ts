import type {
    Column,
    TaskPriority
} from "../../../types/board.types";

export const BOARD_STORAGE_KEY =
    "taskflow-board";

export const DEFAULT_PRIORITY: TaskPriority =
    "Medium";

export const DEFAULT_COLUMNS: Omit<
    Column,
    "tasks"
>[] = [
    {
        id: "todo",
        title: "To Do"
    },
    {
        id: "in-progress",
        title: "In Progress"
    },
    {
        id: "done",
        title: "Done"
    }
];