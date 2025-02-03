import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @CreateDateColumn({ type: 'datetime', nullable: false })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'datetime', nullable: false })
    updatedAt: Date;
  
    @DeleteDateColumn({ type: 'datetime', nullable: true })
    deletedAt: Date;
}
