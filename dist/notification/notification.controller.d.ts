import { NotificationsService } from './notification.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    sendNotification(body: {
        message: string;
        type: string;
    }): Promise<import("./notification.entity").Notification>;
    getAll(): Promise<import("./notification.entity").Notification[]>;
}
