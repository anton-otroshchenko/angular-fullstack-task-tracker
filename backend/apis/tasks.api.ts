import { TasksRepository } from "../repositories/tasks.repository";
import { LabelsTasksRepository } from "../repositories/tasks-labels.repository";
import { TasksService } from "../services/tasks.service";
import { LabelTasksService } from "../services/tasks-labels.service";
import { Tasks } from "../models/tasks.model";
import { LabelsTasks } from "../models/label-tasks.model";
import {FastifyInstance, FastifyRequest} from "fastify";
import {createTask} from "../../shared/types/task-post.type";
import {labelsService} from "./labels.api";
import {createLabelTask} from "../../shared/types/tasks-label-post.type";

const tasksRepository = new TasksRepository(Tasks);
const labelTasksRepository = new LabelsTasksRepository(LabelsTasks);

const tasksService = new TasksService(tasksRepository);
const labelTasksService = new LabelTasksService(labelTasksRepository);

async function tasksRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/tasks', async (_, reply) => {
        const response: unknown[] = [];
        const tasks = await tasksService.getTasks();
        for(const label of tasks){
            const items = await labelTasksService.getTasks(label.id);
            const labels = [];
            for(const item of items){
                const label = await labelsService.getById(item.labelId);
                labels.push(label);
            }
            response.push({...label,labels})
        }
        reply.send(response);
    });
    fastify.post('/tasks', async (request: FastifyRequest, reply) => {
        const data = request.body as createTask;
        const tasks = await tasksService.addTasks(data);
        const labelTasks: createLabelTask[] = [];

        for (const label of data.labels) {
            labelTasks.push({
                labelId: label,
                taskId: tasks.id
            });
        }

        const labels = await labelTasksService.addTasks(labelTasks);

        reply.send({ ...tasks, labels });
    });
    fastify.put('/tasks/:id', async (request: FastifyRequest, reply) => {
        const { id } = request.params as { id: string };
        const data = request.body as createTask;
        const task = await tasksService.updateTask(id,data);
        const tasks = await labelTasksService.removeTask(id);
        const labelTasks: createLabelTask[] = [];
        for (const label of data.labels) {
            labelTasks.push({
                labelId: label,
                taskId: task.id
            });
        }
        const labels = await labelTasksService.addTasks(labelTasks);
        reply.send({...task, labels});
    });
    fastify.delete('/tasks/:id', async (request: FastifyRequest, reply) => {
        const { id } = request.params as { id: string };
        const labels = await tasksService.removeTask(id);
        const tasks = await labelTasksService.removeTask(id);
        reply.send({labels, tasks});
    });
}

export { tasksRoutes }