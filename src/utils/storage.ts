import type { BoardState } from "../types/board.types";

const STORAGE_KEY = "taskflow-board";

export const saveBoard = (
    board: BoardState
) => {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(board)
    );
};

export const getBoard = () => {

    const board =
        localStorage.getItem(
            STORAGE_KEY
        );

    return board
        ? JSON.parse(board)
        : null;
};

export const clearBoard = () => {

    localStorage.removeItem(
        STORAGE_KEY
    );
};