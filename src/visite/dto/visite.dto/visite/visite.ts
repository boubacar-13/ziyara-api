import { IsDate, IsNumber, IsString } from 'class-validator';

export class Visite {
  @IsNumber()
  idVisite: number;

  @IsNumber()
  idUser: number;

  @IsString()
  intitule: string;

  @IsString()
  ville: string;

  //   @IsString()
  //   adresse: string;

  //   @IsString()
  //   hopital: string;

  //   @IsDate()
  //   date: string;

  //   @IsString()
  //   organisateur: string;
}
