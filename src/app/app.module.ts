import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoriesController } from "src/controllers/categories/categories.controller";
import { AuthController } from "src/controllers/auth/auth.controller";
import { MoviesController } from "src/controllers/movies/movies.controller";
import { UsersController } from "src/controllers/users/users.controller";
import { CategoriesService } from "src/services/categories/categories.service";
import { UsersModule } from "src/users/users.module";
import { AuthModule } from "src/auth/auth.module";
import { MoviesModule } from "src/movies/movies.module";

@Module({
  imports: [UsersModule, AuthModule, MoviesModule],
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
