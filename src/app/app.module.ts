import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoriesController } from "src/controllers/categories/categories.controller";
import { AuthController } from "src/controllers/auth/auth.controller";
import { MoviesController } from "src/controllers/movies/movies.controller";
import { UsersController } from "src/controllers/users/users.controller";
import { CategoriesService } from "src/services/categories/categories.service";

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    AuthController,
    MoviesController,
    UsersController,
  ],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
