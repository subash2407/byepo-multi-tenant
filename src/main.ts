import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS to allow requests from Next.js
  app.enableCors({
    origin: 'http://localhost:3000', // Next.js URL
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001);
  console.log(`NestJS running on port ${process.env.PORT ?? 3001}`);
}
bootstrap();
