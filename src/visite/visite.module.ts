import { Module } from '@nestjs/common';
import { VisiteController } from './controller/visite/visite.controller';
import { VisiteService } from './service/visite/visite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visite } from './dto/visite.dto/visite/visite';

@Module({
  imports: [TypeOrmModule.forFeature([Visite])],
  controllers: [VisiteController],
  providers: [VisiteService],
})
export class VisiteModule {}
