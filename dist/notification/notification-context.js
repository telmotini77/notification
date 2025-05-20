"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationContext = void 0;
class NotificationContext {
    strategy;
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    executeStrategy(message) {
        this.strategy.send(message);
    }
}
exports.NotificationContext = NotificationContext;
//# sourceMappingURL=notification-context.js.map