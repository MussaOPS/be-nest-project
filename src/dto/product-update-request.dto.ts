import {IsNotEmpty, IsString} from "class-validator";

export class ProductUpdateRequestDto {

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsString()
    size: string;

    @IsNotEmpty()
    @IsString()
    color: string;

    @IsNotEmpty()
    @IsString()
    brand: string;
}
