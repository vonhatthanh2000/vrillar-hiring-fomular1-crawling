import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Race extends BaseEntity {
  @Column({ type: 'smallint' })
  year: number;

  @Column()
  grandPrix: string;

  @Column()
  position: number;

  @Column()
  number: number;

  @Column()
  driver: string;

  @Column()
  car: string;

  @Column()
  laps: number;

  @Column({ nullable: true })
  timeRetired: string;

  @Column()
  points: number;
}
