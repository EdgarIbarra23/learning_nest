import { Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { BadRequestCustomException } from '../exceptions/BadRequestCustomException';

type TransformValues = string | number | boolean;

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(
    private schema: ObjectSchema,
    private parseObjs?: string[],
  ) { }

  transform(value: TransformValues, meta: { type: string }) {
    if (meta.type !== 'body') return value;
    this.parseDynamicObjs(value);
    const { error } = this.schema.validate(value);

    if (error) {
      throw new BadRequestCustomException(error.details[0].message);
    }

    return value;
  }

  private parseDynamicObjs(value: TransformValues) {
    this.parseObjs?.forEach((key) => {
      try {
        value[key] = JSON.parse(value[key]);
      } catch (error) {
        return;
      }
    });
  }
}
