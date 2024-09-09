import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from "@nestjs/common";

import { Response } from "express";
import { CategoriesService } from "src/services/categories/categories.service";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get("")
  @HttpCode(HttpStatus.ACCEPTED)
  public newEndpoint(): string {
    return "Yo soy nuevo 2.0";
  }

  @Get(":categoryId")
  @HttpCode(HttpStatus.ACCEPTED)
  public getProduct(@Res() response: Response, @Param("categoryId") categoryId: string): void {
    response.status(200).send({
      message: `product ${categoryId}`,
    });
  }

  @Get(":id/products/:productId")
  public getCategory(@Param("id") id: string, @Param("productId") productId: string): string {
    return `category ${id} product ${productId}`;
  }

  //Query
  /** Example http://localhost:3000/categories/product?limit=120&offset=5&brand=query */
  @Get("/product/")
  public getProducts(
    @Query("limit") limit: number = 100,
    @Query("offset") offset: number = 0,
    @Query("brand") brand: string = "",
  ): string {
    return `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  /**Post */
  @Post("")
  public create(@Body() payload: string): {} {
    return {
      message: "Accion de crear",
      payload,
    };
  }

  /** Put */
  @Put(":id")
  public update(@Param("id") id: number, @Body() payload: string): {} {
    return {
      id,
      payload,
    };
  }

  @Delete(":id")
  public delete(@Param("id") id: number): {} {
    return id;
  }
}
