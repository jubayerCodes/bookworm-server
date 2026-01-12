export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  isDeleted?: boolean;
  role: Role;
}
