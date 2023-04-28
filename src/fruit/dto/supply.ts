import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class SupplyDto {

    @IsNumber()
    @Min(0)
    readonly box: number;

    @IsNumber()
    @Min(0)
    readonly pcs: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    readonly bonus: number;

    @IsOptional()
    @IsString()
    readonly msg: string;

}
