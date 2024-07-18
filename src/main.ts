import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Cors access allowed

  app.use(json({ limit: '60mb' })); // Tamaño limite admitido

  // Para la version del código http://localhost:3000/v1/ENDPOINT
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI
  });

  const config = new DocumentBuilder()
    .addBearerAuth() // Autenticacion por token 
    .setTitle('Documentacion API NestJS Inventario')
    .setDescription('Inventario Api Documentation')
    .setVersion('1.0')

    .addTag('usuario')
    .addTag('producto')
    .addTag('sucursal')
    .addTag('almacen')
    .addTag('stock-general')
    .addTag('stock-sucursal')

    .addTag('venta')
    .addTag('venta-detalle')
    .addTag('venta-pago')

    .addTag('compra')
    .addTag('compra-detalle')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe()); // Se agrega la validacion global de todos los DTO's

  await app.listen(3000);
}
bootstrap();
