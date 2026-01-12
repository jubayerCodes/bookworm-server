import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema } from "./user.validation";
import { Role } from "./user.interface";
import { checkAuth } from "../../middlewares/checkAuth";
import { UserControllers } from "./user.controller";

export const UserRoutes = Router();

UserRoutes.post("/register", validateRequest(createUserZodSchema), UserControllers.createUser);
UserRoutes.get("/", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), UserControllers.getAllUsers);
