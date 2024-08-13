import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 30 })
    building: string;

    @Column({ type: 'varchar', length: 30 })
    number: string;

    @Column({ type: 'varchar' })
    area: string;

}
