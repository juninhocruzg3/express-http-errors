import { HttpError } from "./HttpError";
export * from './HttpError';
export * from './express-error-handler';

export class BadRequestError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 400;
        this.error = error;
        this.name = 'BadRequestError';
        this.postBuild();
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 401;
        this.error = error;
        this.name = 'UnauthorizedError';
        this.postBuild();
    }
}

export class PaymentRequiredError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 402;
        this.error = error;
        this.name = 'PaymentRequiredError';
        this.postBuild();
    }
}

export class ForbiddenError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 403;
        this.error = error;
        this.name = 'ForbiddenError';
        this.postBuild();
    }
}

export class NotFoundError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 404;
        this.error = error;
        this.name = 'NotFoundError';
        this.postBuild();
    }
}

export class MethodNotAllowedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 405;
        this.error = error;
        this.name = 'MethodNotAllowedError';
        this.postBuild();
    }
}

export class NotAcceptableError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 406;
        this.error = error;
        this.name = 'NotAcceptableError';
        this.postBuild();
    }
}

export class ProxyAuthenticationRequiredError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 407;
        this.error = error;
        this.name = 'ProxyAuthenticationRequiredError';
        this.postBuild();
    }
}

export class RequestTimeoutError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 408;
        this.error = error;
        this.name = 'RequestTimeoutError';
        this.postBuild();
    }
}

export class ConflictError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 409;
        this.error = error;
        this.name = 'ConflictError';
        this.postBuild();
    }
}

export class GoneError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 410;
        this.error = error;
        this.name = 'GoneError';
        this.postBuild();
    }
}

export class LengthRequiredError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 411;
        this.error = error;
        this.name = 'LengthRequiredError';
        this.postBuild();
    }
}

export class PreconditionFailedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 412;
        this.error = error;
        this.name = 'PreconditionFailedError';
        this.postBuild();
    }
}

export class PayloadTooLargeError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 413;
        this.error = error;
        this.name = 'PayloadTooLargeError';
        this.postBuild();
    }
}

export class URITooLongError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 414;
        this.error = error;
        this.name = 'URITooLongError';
        this.postBuild();
    }
}

export class UnsupportedMediaTypeError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 415;
        this.error = error;
        this.name = 'UnsupportedMediaTypeError';
        this.postBuild();
    }
}

export class RangeNotSatisfiableError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 416;
        this.error = error;
        this.name = 'RangeNotSatisfiableError';
        this.postBuild();
    }
}

export class ExpectationFailedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 417;
        this.error = error;
        this.name = 'ExpectationFailedError';
        this.postBuild();
    }
}

export class ImATeapotError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 418;
        this.error = error;
        this.name = 'ImATeapotError';
        this.postBuild();
    }
}

export class MisdirectedRequestError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 421;
        this.error = error;
        this.name = 'MisdirectedRequestError';
        this.postBuild();
    }
}

export class UnprocessableEntityError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 422;
        this.error = error;
        this.name = 'UnprocessableEntityError';
        this.postBuild();
    }
}

export class LockedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 423;
        this.error = error;
        this.name = 'LockedError';
        this.postBuild();
    }
}

export class FailedDependencyError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 424;
        this.error = error;
        this.name = 'FailedDependencyError';
        this.postBuild();
    }
}

export class TooEarlyError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 425;
        this.error = error;
        this.name = 'TooEarlyError';
        this.postBuild();
    }
}

export class UpgradeRequiredError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 426;
        this.error = error;
        this.name = 'UpgradeRequiredError';
        this.postBuild();
    }
}

export class PreconditionRequiredError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 428;
        this.error = error;
        this.name = 'PreconditionRequiredError';
        this.postBuild();
    }
}

export class TooManyRequestsError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 429;
        this.error = error;
        this.name = 'TooManyRequestsError';
        this.postBuild();
    }
}

export class RequestHeaderFieldsTooLargeError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 431;
        this.error = error;
        this.name = 'RequestHeaderFieldsTooLargeError';
        this.postBuild();
    }
}

export class UnavailableForLegalReasonsError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 451;
        this.error = error;
        this.name = 'UnavailableForLegalReasonsError';
        this.postBuild();
    }
}

export class InternalServerError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 500;
        this.error = error;
        this.name = 'InternalServerError';
        this.postBuild();
    }
}

export class NotImplementedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 501;
        this.error = error;
        this.name = 'NotImplementedError';
        this.postBuild();
    }
}

export class BadGatewayError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 502;
        this.error = error;
        this.name = 'BadGatewayError';
        this.postBuild();
    }
}

export class ServiceUnavailableError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 503;
        this.error = error;
        this.name = 'ServiceUnavailableError';
        this.postBuild();
    }
}

export class GatewayTimeoutError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 504;
        this.error = error;
        this.name = 'GatewayTimeoutError';
        this.postBuild();
    }
}

export class HTTPVersionNotSupportedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 505;
        this.error = error;
        this.name = 'HTTPVersionNotSupportedError';
        this.postBuild();
    }
}

export class VariantAlsoNegotiatesError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 506;
        this.error = error;
        this.name = 'VariantAlsoNegotiatesError';
        this.postBuild();
    }
}

export class InsufficientStorageError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 507;
        this.error = error;
        this.name = 'InsufficientStorageError';
        this.postBuild();
    }
}

export class LoopDetectedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 508;
        this.error = error;
        this.name = 'LoopDetectedError';
        this.postBuild();
    }
}

export class BandwidthLimitExceededError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 509;
        this.error = error;
        this.name = 'BandwidthLimitExceededError';
        this.postBuild();
    }
}

export class NotExtendedError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 510;
        this.error = error;
        this.name = 'NotExtendedError';
        this.postBuild();
    }
}

export class NetworkAuthenticationRequiredError extends HttpError {
    constructor(message:string, error?: unknown) {
        super(message);
        this.status = 511;
        this.error = error;
        this.name = 'NetworkAuthenticationRequiredError';
        this.postBuild();
    }
}