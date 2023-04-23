import { CustomError } from "./custom-error";
export declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    constructor(msg?: string);
    serializeErrors(): {
        message: string;
    }[];
}
