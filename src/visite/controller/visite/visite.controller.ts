import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('visite')
export class VisiteController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(): string {
    return 'This action adds a new visit';
  }

  @Get()
  findAll(): string {
    return 'This action returns all the visits';
  }
}
