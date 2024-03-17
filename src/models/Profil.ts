export interface Profil {
  _id?: string;
  fullName: string;
  email: string;
  address: string;
  business_name: string;
  phone: string;
  description: string;
  function: string;
  picture: string;
  hours: string;
  isUser: boolean;
  connected? : boolean;  
  users: string;
  website: string;
}
