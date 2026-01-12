import { Router } from "express";
import { UserRoutes } from "../modules/User/user.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";

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
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
