export interface Task {
    id?: number; // The '?' is for optional
    text: string;
    day: string;
    reminder: boolean;
}