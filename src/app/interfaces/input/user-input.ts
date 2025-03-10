export class UserInput {
  name: string;
  email: string;
  password: string;
  role: number;

  constructor(user: any) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
  }
}
