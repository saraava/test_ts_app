import { CreatetaskDto } from './dto/create-tast.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Body, Controller, Get, Post,Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private taskService : TasksService){}

    @Get()
    getAllTasks():Task[]
    {
       return this.taskService.getAllTasks();
    }
    @Post()
    createTask(@Body() CreatetaskDto:CreatetaskDto):Task
    {
    
        return this.taskService.createATask(CreatetaskDto);
       
    }
    @Get('/:id')
    getTaskById(@Param('id') id:string ):Task 
    {
        const val = this.taskService.getTaskById(id);
       // console.log(val);
        return val;
       
    }
}
