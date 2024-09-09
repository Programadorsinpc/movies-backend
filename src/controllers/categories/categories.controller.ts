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
} from "@nestjs/common";
import { ParseIntPipe } from "src/common/parse-int/parse-int.pipe";
import { CreateCategoryDTO, UpdateCategoryDTO } from "src/dtos/categories.dtos";
import { Category } from "src/entities/product.entity";
import { CategoriesService } from "src/services/categories/categories.service";

@Controller("categories")
export class CategoriesController {
  public constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  public getCategories(): Category[] {
    //return "Yo soy nuevo 2.0";
    return this.categoryService.findAll();
  }

  @Get(":categoryId")
  @HttpCode(HttpStatus.ACCEPTED)
  public getCategoryById(@Param("categoryId", ParseIntPipe) categoryId: number): Category {
    // response.status(200).send({
    //   message: `product ${categoryId}`,
    // });
    return this.categoryService.findOne(categoryId);
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
  public create(@Body() payload: CreateCategoryDTO): Category {
    // return {
    //   message: "Accion de crear",
    //   payload,
    // };
    return this.categoryService.create(payload);
  }

  /** Put */
  @Put(":id")
  public update(@Param("id") id: string, @Body() payload: UpdateCategoryDTO): Category {
    // return {
    //   id,
    //   payload,
    // };
    return this.categoryService.update(+id, payload);
  }

  @Delete(":id")
  public delete(@Param("id") id: string): boolean {
    return this.categoryService.remove(+id);
  }
}
