import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ description: 'Name of the user', required: true })
    name: string;

    @ApiProperty({ description: 'Last Name of the user', required: true })
    lastName: string;

    @ApiProperty({ description: 'Age of the user', required: true })
    age: number;

    @ApiProperty({ description: 'Email of the user', required: true })
    email: string;

    @ApiProperty({ description: 'Password of the user', required: true })
    password: string;

    @ApiProperty({ description: 'Id Role of the user', required: true })
    role: number;

    // @ApiProperty({ description: 'Id Company Associated of the user', required: true })
    // company_id: number;
}
