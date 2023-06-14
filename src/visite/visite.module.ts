import { Module } from '@nestjs/common';
import { VisiteController } from './controller/visite/visite.controller';
import { VisiteService } from './service/visite/visite.service';

@Module({
  controllers: [VisiteController],
  providers: [VisiteService],
})
export class VisiteModule {}
