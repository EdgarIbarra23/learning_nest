import { EntityMetadata } from "typeorm";
import { ConflictCustomException } from "../exceptions/ConflictCustomException";
import { InternalServerErrorCustomException } from "../exceptions/InternalServerErrorCustomException";
import { NotFoundCustomException } from "../exceptions/NotFoundCustomException";

export function manageError(error: any, entityMetadata?: EntityMetadata): never {
    if (error instanceof NotFoundCustomException || error instanceof ConflictCustomException) {
        throw error;
    }

    if (error.code === "ER_DUP_ENTRY") {
        const duplicatedField = extractFieldFromError(error, entityMetadata);
        throw new ConflictCustomException(`El valor para el campo '${duplicatedField}' ya existe.`);
    }

    throw new InternalServerErrorCustomException(error);
}


function extractFieldFromError(error: any, metadata: EntityMetadata): string {
    const matchIndex = error.sqlMessage.match(/key '(.+)'/);

    if (matchIndex) {
        const indexName = matchIndex[1];

        const uniqueColumn = metadata.indices.find(
            (index) => index.name === indexName,
        );

        if (uniqueColumn && uniqueColumn.columns.length > 0) {
            return uniqueColumn.columns[0].propertyName;
        }
    }

    return 'campo desconocido';
}
