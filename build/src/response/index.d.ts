interface ResponseOptions {
    statusCode?: number;
    message?: string;
    data?: any[];
    ok?: boolean;
}
export declare function responseGenerator(responseOptions: ResponseOptions): {
    statusCode: number;
    ok: boolean;
    message: string;
    data: any[];
};
export {};
