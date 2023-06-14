import { Module } from '@nestjs/common';
import { VisiteController } from './controller/visite/visite.controller';

@Module({
  controllers: [VisiteController],
})
export class VisiteModule {}
