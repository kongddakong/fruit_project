import { ApiProperty } from "@nestjs/swagger";

export class Result {
  @ApiProperty()
  msg: string;

  @ApiProperty({
	  description: '���� ������ �� ����',
	  minimum: 0,
	  default: 0,
	})
  remain: number;
}