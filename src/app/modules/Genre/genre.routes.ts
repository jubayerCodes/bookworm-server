import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { createGenreZodSchema } from "./genre.validation";
import { GenreControllers } from "./genre.controller";
import { Role } from "../User/user.interface";

export const GenreRoutes = Router();

GenreRoutes.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createGenreZodSchema),
  GenreControllers.createGenre
);
GenreRoutes.get("/", checkAuth(...Object.values(Role)), GenreControllers.getAllGenres);
GenreRoutes.get("/:id", checkAuth(...Object.values(Role)), GenreControllers.getGenreById);
GenreRoutes.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createGenreZodSchema.partial()),
  GenreControllers.updateGenreById
);
GenreRoutes.delete("/:id", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), GenreControllers.deleteGenreById);
