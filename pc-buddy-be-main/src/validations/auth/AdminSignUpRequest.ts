import { IsEmail, IsNotEmpty } from 'class-validator';

export class AdminSignUpRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  admin_key: string;
}
