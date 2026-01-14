import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { createBookZodSchema } from "./book.validation";
import { BookControllers } from "./book.controller";
import { Role } from "../User/user.interface";
import { multerUpload } from "../../config/multer.config";

export const BookRoutes = Router();

BookRoutes.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("file"),
  validateRequest(createBookZodSchema),
  BookControllers.createBook
);
