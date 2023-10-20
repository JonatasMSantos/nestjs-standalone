import { NestFactory } from '@nestjs/core';
import { QueueModule } from 'src/queue.module';

async function bootstrap() {
  //standalone
  const app = await NestFactory.createApplicationContext(QueueModule);

  await app.init();
}
bootstrap();
