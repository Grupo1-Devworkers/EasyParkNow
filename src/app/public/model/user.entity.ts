export interface UserEntity {
  //esto me va a permitir logear al usuario
  id: number;
  username: string;
  email: string;
  roles: string[];
}
