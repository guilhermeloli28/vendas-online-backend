import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'state' })
class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updateAt: Date;
}

export { StateEntity };
