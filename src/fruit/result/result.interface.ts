import { ApiProperty } from "@nestjs/swagger";

export class Result {
  @ApiProperty()
  msg: string;

  @ApiProperty({
	  description: '남은 과일의 총 개수',
	  minimum: 0,
	  default: 0,
	})
  remain: number;
}