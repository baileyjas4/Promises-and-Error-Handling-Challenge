// ----- errors.ts ----- //

// error for network error

export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
};

// this is for data error
export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
};