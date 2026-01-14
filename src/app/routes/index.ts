import { Router } from "express";
import { UserRoutes } from "../modules/User/user.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { GenreRoutes } from "../modules/Genre/genre.routes";
import { BookRoutes } from "../modules/Book/book.routes";

export const router = Router();

const moduleRoutes: {
  path: string;
  route: Router;
}[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/genres",
    route: GenreRoutes,
  },
  {
    path: "/books",
    route: BookRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
