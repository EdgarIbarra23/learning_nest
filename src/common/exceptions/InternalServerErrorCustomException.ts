import { HttpStatus, InternalServerErrorException } from "@nestjs/common";

export class InternalServerErrorCustomException extends InternalServerErrorException {
  constructor(message: string) {
    const response = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      success: false,
    };

    super(response);
  }
}
