import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';
import { pusherConfig } from 'src/config/pusher.config';

@Injectable()
export class NotificationService {
    private readonly pusher: Pusher;

    constructor() {
        this.pusher = new Pusher(pusherConfig);
    }

    async trigger(data: any): Promise<void> {
        await this.pusher.trigger('notification', 'notification', data);
    }
}
