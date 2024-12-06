import { ApiProperty } from "@nestjs/swagger";

export class AuthCredentialsDto {
    @ApiProperty({ description: 'Name of the user', required: true })
    name: string;
    
    @ApiProperty({ description: 'Password of the user', required: true })
    password: string;
}
