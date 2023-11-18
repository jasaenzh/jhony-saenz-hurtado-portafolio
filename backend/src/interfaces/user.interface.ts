
export enum UserRole {
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
}