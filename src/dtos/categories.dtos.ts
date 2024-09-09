import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  public readonly name?: string;

  @IsString()
  @IsNotEmpty()
  public readonly description?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  public readonly price?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  public readonly stock?: number;

  @IsUrl()
  @IsNotEmpty()
  public readonly image?: string;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}
