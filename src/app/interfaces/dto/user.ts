import { DefaultDto } from "./default-dto";

export interface User extends DefaultDto {
  name: string;
  email: string;
  password: string;
  idRole: number;
  role: string;
}
