import { User } from "../../users/entities/user.entity";
import { BaseEntity } from "../../../common/entities/BaseEntity.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'roles' })
export class Role extends BaseEntity {
    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    name: string;

    @OneToMany(
        () => User,
        (user) => user.role
    )
    users: User[];
}
