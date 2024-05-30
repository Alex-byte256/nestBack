import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('event_post')
export class EventPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 ,default:'' })
    title: string;

    @Column({ type: 'timestamp' , default:'now()'})
    date: Date;

    @Column({ type: 'varchar', length: 255 ,default:'' })
    location: string;

    @Column({ type: 'varchar', length: 255 ,default:'' })
    category: string;

    @Column({ type: 'text', nullable: true , default:'' })
    description: string;
}
