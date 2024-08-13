import {
    IsAlphanumeric,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateLocationDto {
    @IsString()
    @MinLength(3, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(3, { message: 'Building must have atleast 3 characters.' })
    building: string;

    @IsNotEmpty()
    @MinLength(3, { message: 'Building must have atleast 3 characters.' })
    @IsAlphanumeric(null, {
        message: 'building does not allow other than alpha numeric chars.',
    })
    number: string;

    @IsString()
    @MinLength(3, { message: 'Building must have atleast 3 characters.' })
    @IsNotEmpty()
    area: string;
}
