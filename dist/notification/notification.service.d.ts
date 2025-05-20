import { Repository } from 'typeorm';
import { Notification } from './notification.entity';
export declare class NotificationsService {
    private notificationRepository;
    constructor(notificationRepository: Repository<Notification>);
    sendNotification(message: string, type: string): Promise<Notification>;
    findAll(): Promise<Notification[]>;
}
