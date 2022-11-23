import { TasksController } from './tasks.controller';
import { Module, Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Module({
    controllers:[TasksController],
    providers: [TasksService],
})
export class TasksModule {}
