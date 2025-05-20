import { NotificationStrategy } from "./notification-strategy.interface";
export declare class EmailNotification implements NotificationStrategy {
    send(message: string): void;
}
