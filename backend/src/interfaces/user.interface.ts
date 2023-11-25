import { AuthInterface } from "./auth.interface";

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface UserInterface extends AuthInterface {
  id?: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  birthdate: string;
  role: UserRole;
}