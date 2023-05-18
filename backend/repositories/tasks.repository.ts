import { Tasks } from "../models/tasks.model";
import {createTask} from "../../shared/types/task-post.type";
class TasksRepository {
    private model: typeof Tasks;

    constructor(model: typeof Tasks) {
        this.model = model;
    }

    async getTasks() {
        return this.model.query();
    }

    async addTasks(data:createTask){
        return this.model.query().insert({
            title: data.title,
            details: data.details,
            columnId: data.columnId
        });
    }

    async updateTask(id:string, data:createTask) {
        return this.model.query().patchAndFetchById(id, {
            title: data.title,
            details: data.details,
            columnId: data.columnId
        });
    }
    async removeTasks(id: string) {
        return this.model.query().deleteById(id);
    }
}

export { TasksRepository };
