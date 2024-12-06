import { ConflictException, HttpStatus } from "@nestjs/common";

export class ConflictCustomException extends ConflictException {
    constructor(message: string) {
        const response = {
            statusCode: HttpStatus.CONFLICT,
            message,
            success: false,
        };

        super(response);
    }
}
