import { CreatetaskDto } from './dto/create-tast.dto';
import { TaskStatus } from './../enum/enumValue.model';
import { Task } from './task.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks():Task[]
    {
        return this.tasks;
    }
    createATask(CreatetaskDto:CreatetaskDto):Task
    {
        const {title , description} = CreatetaskDto;
        const task:Task = {
            id:uuidv4(),
            title,
            description,
            status:TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task;
    }
    getTaskById (id:string):Task
    {
        return this.tasks.find(task=> task.id === id);
    }



}
 