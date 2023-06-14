import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Visite } from 'src/visite/dto/visite.dto/visite/visite';
import { Repository } from 'typeorm';

@Injectable()
export class VisiteService {
  constructor(
    @InjectRepository(Visite)
    private visitesRepository: Repository<Visite>,
  ) {}

  public visites: Visite[] = [];

  create(visite: Visite): Visite {
    this.visites.push(visite);
    return visite;
  }

  findAll(): Promise<Visite[]> {
    return this.visitesRepository.find();
  }

  //   findOne(id: number): Promise<Visite | null> {
  //     return this.visitesRepository.findOneBy({ id });
  //   }

  async remove(id: number): Promise<void> {
    await this.visitesRepository.delete(id);
  }
}
