import { BadRequestException, HttpStatus } from '@nestjs/common';

export class BadRequestCustomException extends BadRequestException {
  constructor(message: string) {
    const response = {
      statusCode: HttpStatus.BAD_REQUEST,
      message,
      success: false,
    };

    super(response);
  }
}
