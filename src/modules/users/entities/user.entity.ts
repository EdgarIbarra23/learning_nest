import { BaseEntity } from "../../../common/entities/BaseEntity.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne} from "typeorm";
import * as bcrypt from 'bcrypt';
import { Role } from "../../roles/entities/role.entity";

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    lastName: string;

    @Column({ type: 'int' })
    age: number;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;
    
    @ManyToOne(
        () => Role,
        (role) => role.users,
        { onDelete: 'CASCADE' }
    )
    role: Role;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.password) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
    }

    // @ManyToOne(
    //     () => Company,
    //     (company) => company.users,
    //     { onDelete: 'CASCADE' }
    // )
    // company_id: Company
}
