import { IsNumber, IsOptional, IsString, MIN } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SupplyDto {
    @IsOptional()
    @IsNumber()
    //@MIN(0)
    @ApiProperty()
    readonly total: number;

    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly msg: string;

}
