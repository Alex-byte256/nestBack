import { Injectable } from '@nestjs/common';
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {EventPostEntity} from "../modules/post.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {EventPost} from "../modules/post.intarface";
import {from, Observable} from "rxjs";

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(EventPostEntity)
        private readonly eventPostRepository: Repository<EventPostEntity>
    ) {
    }

    createPost(eventPost: EventPost): Observable<EventPost>{
        return from(this.eventPostRepository.save(eventPost))
    }

    findAllEvents(): Observable<EventPost[]> {
        return from(this.eventPostRepository.find())
    }

    updateEvent(id:number, eventPost: EventPost): Observable<UpdateResult>     {
        return from(this.eventPostRepository.update(id, eventPost))
    }

    deletePost(id:number): Observable<DeleteResult> {
        return from(this.eventPostRepository.delete(id))
    }
}
