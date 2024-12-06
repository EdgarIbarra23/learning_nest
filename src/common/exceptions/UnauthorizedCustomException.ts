import { HttpStatus, UnauthorizedException } from "@nestjs/common";

export class UnauthorizedCustomException extends UnauthorizedException {
    constructor(message: string) {
        const response = {
            statusCode: HttpStatus.UNAUTHORIZED,
            message,
            success: false,
        };

        super(response);
    }
}
