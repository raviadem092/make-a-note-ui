export type TaskPriority =
    | "Low"
    | "Medium"
    | "High";

export interface Task {
    id: number;
    title: string;
    description?: string;
    priority: TaskPriority;
}
export interface Column {
    id: string;
    title: string;
    tasks: Task[];
}

export interface BoardState {
    columns: Column[];
}