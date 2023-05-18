import { LabelsTasksRepository } from "../repositories/tasks-labels.repository";
import { createLabelTask } from "../../shared/types/tasks-label-post.type";
import {responseLabelTask} from "../../shared/types/task-label.response.type";

class LabelTasksService {
    private tasksRepository: LabelsTasksRepository;

    constructor(tasksRepository: LabelsTasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    async getTasks(id: string) {
        return this.tasksRepository.getLabelsTasks(id);
    }

    async addTasks(data: createLabelTask[]) {
        const promises = data.map(label => this.tasksRepository.addLabelTasks(label));
        const arr: responseLabelTask[] = await Promise.all(promises);
        return arr;
    }

    async removeTask(id:string){
        return this.tasksRepository.removeLabelTasks(id);
    }
}

export { LabelTasksService };
