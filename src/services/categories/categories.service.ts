import { Injectable, NotFoundException } from "@nestjs/common";
import type { CreateCategoryDTO, UpdateCategoryDTO } from "src/dtos/categories.dtos";
import type { Category } from "src/entities/product.entity";

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private readonly categories: Category[] = [
    {
      id: 1,
      name: "Category 1",
      description: "bla bla",
      price: 122,
      image: "",
      stock: 12,
    },
    {
      id: 2,
      name: "Category 2",
      description: "Descripcion del item 2",
      price: 122,
      image: "",
      stock: 12,
    },
    {
      id: 3,
      name: "Category 3",
      description: "Descripcion del item 3",
      price: 122,
      image: "",
      stock: 12,
    },
  ];

  public findAll(): Category[] {
    return this.categories;
  }

  public findOne(id: number): Category {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  public create(payload: CreateCategoryDTO): Category {
    this.counterId += 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  public update(id: number, payload: UpdateCategoryDTO): Category {
    const category = this.findOne(id);
    const index = this.categories.findIndex((category) => category.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }

  public remove(id: number): boolean {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
