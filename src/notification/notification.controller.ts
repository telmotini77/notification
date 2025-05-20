import { Controller, Post, Body, Get } from '@nestjs/common';
import { NotificationsService } from './notification.service';

@Controller('notification')

export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async sendNotification(@Body() body: { message: string; type: string }) {
    return this.notificationsService.sendNotification(body.message, body.type);
  }

  @Get()
  async getAll() {
    return this.notificationsService.findAll();
  }
}


