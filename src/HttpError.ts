import { Response } from "express";

export abstract class HttpError extends Error {
    public status: number;
    constructor(public message: string, public error?: unknown) {
        super(message);
    }
    send(res: Response) {
        res.status(this.status).send({
            code: this.status,
            message: this.message,
            error: this.error,
        })
    }
    protected postBuild() {
        /**
         * nothing todo
         */
    }
}