import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Role } from "src/common/enum";

export class LoginDto {
    @IsNumber()
    organization_id!: number;

    @IsEmail()
    email!: string;

    @IsNotEmpty()
    password!: string;
}

export class SignupDto {
  @IsString()
  declare name: string;
  
  @IsEmail()
  declare email: string;

  @IsNotEmpty()
  declare password: string;
  

  @IsNotEmpty()
  declare role: Role;

  @IsNumber()
  declare organization_id: number;
}
