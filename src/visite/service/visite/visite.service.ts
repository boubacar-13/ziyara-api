import { Injectable } from '@nestjs/common';
import { Visite } from 'src/visite/dto/visite.dto/visite/visite';

@Injectable()
export class VisiteService {
  public visites: Visite[] = [];
  create(visite: Visite): Visite {
    this.visites.push(visite);
    return visite;
  }
  findAll(): Visite[] {
    return this.visites;
  }
}
