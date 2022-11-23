 import {TaskStatus} from '../enum/enumValue.model';

 export interface Task{

    id:string;
    title:string;
    description:string;
    status: TaskStatus;
 }