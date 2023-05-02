import { IsNumber, IsOptional, IsString, MIN } from "class-validator";

export class SupplyDto {
    @IsOptional()
    @IsNumber()
    //@MIN(0)
    readonly total: number;

    @IsOptional()
    @IsString()
    readonly msg: string;

}
