export class User {
  id: number;
  email: string;
  password?: string;
  name: string;
  token?: string;
  constructor(id, email, name, token) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.token = token;
  }
}
