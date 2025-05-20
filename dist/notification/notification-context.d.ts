import { NotificationStrategy } from "./notification-strategy.interface";
export declare class NotificationContext {
    private strategy;
    setStrategy(strategy: NotificationStrategy): void;
    executeStrategy(message: string): void;
}
