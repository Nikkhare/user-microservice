import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    // const app = await NestFactory.createMicroservice(AppModule, {
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqps://cazxvfvw:GGR-2_payPEqkCXTBX5PMBhQiuTAmRKI@cougar.rmq.cloudamqp.com/cazxvfvw'],
    //       queue: 'user_main_queue',
    //       queueOptions: {
    //         durable: false
    //       },
    //     },
    // });
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://cazxvfvw:GGR-2_payPEqkCXTBX5PMBhQiuTAmRKI@cougar.rmq.cloudamqp.com/cazxvfvw'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      },
    });
    app.listen();
    // app.listen(() => {
    //   console.log('Microservice is listening');
    // });
  }
  bootstrap();