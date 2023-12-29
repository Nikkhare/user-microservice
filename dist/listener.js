"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://cazxvfvw:GGR-2_payPEqkCXTBX5PMBhQiuTAmRKI@cougar.rmq.cloudamqp.com/cazxvfvw'],
            queue: 'cats_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=listener.js.map