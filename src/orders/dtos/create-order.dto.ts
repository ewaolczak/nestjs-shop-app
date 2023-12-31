import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  // @Min(0)
  @MinLength(0)
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 30)
  client: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}
