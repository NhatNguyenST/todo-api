import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Complete homework',
    required: true,
    maxLength: 100,
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'Need to finish math homework by tomorrow',
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The completion status of the task',
    example: false,
    required: false,
    default: false,
    type: Boolean,
  })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
