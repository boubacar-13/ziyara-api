import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisiteModule } from './visite/visite.module';

@Module({
  imports: [VisiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
