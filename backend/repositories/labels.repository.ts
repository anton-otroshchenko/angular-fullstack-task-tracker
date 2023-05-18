import { Labels } from '../models/labels.model';
import { type createLabel } from '../../shared/types/label-post.type';
class LabelsRepository {
    private model: typeof Labels;

    constructor(model: typeof Labels) {
        this.model = model;
    }


     async getById(id: string) {
        return this.model.query().findById(id);
    }

    async getLabels() {
        return this.model.query();
    }

    async addLabel(data:createLabel){
        return this.model.query().insert(data);
    }

    async removeLabel(id: string) {
        return this.model.query().deleteById(id);
    }
}

export { LabelsRepository };
