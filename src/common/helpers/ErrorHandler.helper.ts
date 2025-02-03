import { EntityMetadata } from "typeorm";
import { ConflictCustomException } from "../exceptions/ConflictCustomException";
import { InternalServerErrorCustomException } from "../exceptions/InternalServerErrorCustomException";
import { NotFoundCustomException } from "../exceptions/NotFoundCustomException";

export function manageError(error: any, entityMetadata?: EntityMetadata): never {
    if (error instanceof NotFoundCustomException || error instanceof ConflictCustomException) {
        throw error;
    }

    if (error.code === "ER_DUP_ENTRY") {
        const duplicatedValue = extractFieldFromError(error);
        throw new ConflictCustomException(`El valor '${duplicatedValue}' ya existe.`);
    }

    throw new InternalServerErrorCustomException(error);
}


function extractFieldFromError(error: any): string {
    const regex = /Duplicate entry '(.+?)' for key/;
    const match = error.sqlMessage.match(regex);

    if (match) {
        const duplicatedValue = match[1];
        return duplicatedValue;
    }

    return 'valor desconocido';
}