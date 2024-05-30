import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {EventService} from "../services/event.service";
import {EventPost} from "../modules/post.intarface";
import {Observable} from "rxjs";
import {DeleteResult, UpdateResult} from "typeorm";

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) {
    }

    @Post()
    create(@Body() event: EventPost): Observable<EventPost>    {
        return this.eventService.createPost(event)
    }

    @Get()
    findAll(): Observable<EventPost[]> {
        return this.eventService.findAllEvents()
    }

    @Put(':id')
    update(
        @Param('id') id:number,
        @Body() eventPost: EventPost
    ): Observable<UpdateResult> {
        return this.eventService.updateEvent(id, eventPost)
    }

    @Delete(':id')
    delete( @Param('id') id:number): Observable<DeleteResult>{
            return this.eventService.deletePost(id)
    }
}
