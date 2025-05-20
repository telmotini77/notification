import { NotificationStrategy } from "./notification-strategy.interface";
export declare class PushNotification implements NotificationStrategy {
    send(message: string): void;
}
