import type { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform {
  public transform(value: string, metadata: ArgumentMetadata): {} {
    const num = parseInt(value, 10);
    if (isNaN(num)) {
      throw new BadRequestException(`${value} is not a number`);
    }
    metadata;
    return value;
  }
}
