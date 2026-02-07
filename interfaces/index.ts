export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    status: "active" | "inactive";
    created_at: string;
  }
  