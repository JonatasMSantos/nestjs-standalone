import { Module } from '@nestjs/common';
import { MyRabbitmqModule } from './my-rabbitmq/my-rabbitmq.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.forRoot({
      //bulljs - fila de processamento local
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    MyRabbitmqModule, //conectar rabbit
    ProductsModule.register(),
  ],
})
export class AppModule {}

/**
 * forRoot() or forFeature()
 */
