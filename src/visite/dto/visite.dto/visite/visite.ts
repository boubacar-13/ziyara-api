import { IsDate, IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Visite {
  @PrimaryGeneratedColumn()
  idVisite: number;

  @Column()
  @IsNumber()
  idUser: number;

  @Column()
  @IsString()
  intitule: string;

  @Column()
  @IsString()
  ville: string;

  @Column({ default: true })
  isFullyBooked: boolean;

  //   @OneToMany((type) => User, (user) => user.visites)
  //   users: User[];
  //   @IsString()
  //   adresse: string;

  //   @IsString()
  //   hopital: string;

  //   @IsDate()
  //   date: string;

  //   @IsString()
  //   organisateur: string;
}
