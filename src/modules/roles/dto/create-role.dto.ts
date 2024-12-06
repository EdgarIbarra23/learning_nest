import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({description: 'Name of the role', required: true})
    name: string
}
