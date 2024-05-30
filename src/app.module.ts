import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { EventModule } from './event/event.module';
import * as process from "node:process";

// @ts-ignore
@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true
      }),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.POSTGRES_HOST ||'localhost',
          port: Number(process.env.POSTGRES_PORT) || 5432,
          username: process.env.POSTGRES_USERNAME,
          password: String(process.env.POSTGRES_PASSWORD),
          database: process.env.POSTGRES_DATABASE,
          autoLoadEntities: true,
          synchronize: true,
      }),
      EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
