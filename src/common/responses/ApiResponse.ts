import { HttpStatus } from "@nestjs/common";

export class ApiResponse {
    public static OK(data = null, message: string = 'Operación realizada con éxito') {
        const response = {
            statusCode: HttpStatus.OK,
            message: message,
            success: true,
            data: data
        };

        return response;
    }

    public static Create(data = null, message: string = 'Operación realizada con éxito') {
        const response = {
            statusCode: HttpStatus.CREATED,
            message: message,
            success: true,
            data: data
        };

        return response;
    }
}
