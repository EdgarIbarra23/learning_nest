import { ForbiddenException, HttpStatus } from "@nestjs/common";

export class ForbiddenCustomException extends ForbiddenException {
    constructor(message: string) {
        const response = {
            statusCode: HttpStatus.FORBIDDEN,
            message,
            success: false,
        }

        super(response);
    }
}
