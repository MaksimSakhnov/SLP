import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'levels' })
export class LevelsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300, nullable: false })
  text: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  picture_first: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  picture_second: string;

  @Column({ type: 'int', nullable: false })
  statistic_first: number;

  @Column({ type: 'int', nullable: false })
  statistic_second: number;
}
