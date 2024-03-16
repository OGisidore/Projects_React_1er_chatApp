import { Profil } from "./Profil";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  profile: Profil;
  password: string;
  created_at: Date | string;
  update_at: Date | string;
}


