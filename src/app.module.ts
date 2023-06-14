import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisiteModule } from './visite/visite.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visite } from './visite/dto/visite.dto/visite/visite';

@Module({
  imports: [
    VisiteModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ziyara-api-microservices',
      entities: [Visite],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
