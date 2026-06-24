export const generateColumnId =
    () =>
        crypto.randomUUID();

export const generateTaskId =
    () =>
        Date.now();

export const formatColumnTitle =
    (title: string) =>
        title.trim();

export const formatTaskTitle =
    (title: string) =>
        title.trim();