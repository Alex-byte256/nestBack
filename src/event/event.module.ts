import { Module } from '@nestjs/common';
import { EventService } from './services/event.service';
import { EventController } from './controllers/event.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EventPostEntity} from "./modules/post.entity";

@Module({
  imports:[
      TypeOrmModule.forFeature([EventPostEntity])
  ],
  providers: [EventService],
  controllers: [EventController]
})
export class EventModule {}
