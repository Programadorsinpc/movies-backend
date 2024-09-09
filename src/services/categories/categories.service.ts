import { Injectable } from "@nestjs/common";
import type { Product } from "src/entities/product.entity";

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private readonly categories: Product[] = [
    {
      id: 1,
      name: "Product 1",
      description: "bla bla",
      price: 122,
      image: "",
      stock: 12,
    },
  ];

  public findAll(): Product[] {
    return this.categories;
  }

  public findOne(id: number): Product {
    return this.categories.find((item) => item.id === id)!;
  }

  public create(payload: any): Product {
    this.counterId += 1;
    const newCategory: Product = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
}
