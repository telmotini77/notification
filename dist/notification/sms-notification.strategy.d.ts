import { NotificationStrategy } from "./notification-strategy.interface";
export declare class SMSNotification implements NotificationStrategy {
    send(message: string): void;
}
