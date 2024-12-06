import { HttpStatus, NotFoundException } from '@nestjs/common';

export class NotFoundCustomException extends NotFoundException {
  constructor(message: string) {
    const response = {
      statusCode: HttpStatus.NOT_FOUND,
      message,
      success: false,
    };

    super(response);
  }
}

