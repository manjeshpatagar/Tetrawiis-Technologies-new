import { DocumentBuilder } from '@nestjs/swagger';
export const swaggerConfig = new DocumentBuilder()
  .setTitle('Tetrawiis API')
  .setDescription('Tetrawiis enterprise API documentation')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
