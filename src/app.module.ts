import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsModule } from './notification/notification.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'notification_db',
    autoLoadEntities: true,
    synchronize: true,
  }), 
  NotificationsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
