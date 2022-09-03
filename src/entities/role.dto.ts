import {IsNotEmpty,IsString} from 'class-validator';
export class RoleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  is_deleted: boolean

  @IsNotEmpty()
  is_created: boolean

  @IsNotEmpty()
  is_updated: boolean

  @IsNotEmpty()
  is_report: boolean

  @IsNotEmpty()
  is_download: boolean
}
