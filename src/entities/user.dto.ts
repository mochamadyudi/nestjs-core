import {IsEmail,IsNotEmpty,IsString} from 'class-validator';

export class UserProfileDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string
}
