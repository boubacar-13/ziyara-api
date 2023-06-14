import { Body, Controller, Get, Post } from '@nestjs/common';
import { Visite } from 'src/visite/dto/visite.dto/visite/visite';
import { VisiteService } from 'src/visite/service/visite/visite.service';

@Controller('visites')
export class VisiteController {
  constructor(private readonly visiteService: VisiteService) {}
  @Post('/')
  create(@Body() visite: Visite): Visite {
    return this.visiteService.create(visite);
  }
  @Get('/')
  findAll(): Visite[] {
    return this.visiteService.findAll();
  }
}
