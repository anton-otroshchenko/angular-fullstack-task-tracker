import {LabelsRepository} from '../repositories/labels.repository';
import {createLabel} from "../../shared/types/label-post.type";

class LabelsService {
    private labelRepository: LabelsRepository;

    constructor(labelRepository: LabelsRepository) {
        this.labelRepository = labelRepository;
    }

    async getById(id: string){
        return this.labelRepository.getById(id);
    }
    async getLabels() {
        return this.labelRepository.getLabels();
    }

    async addLabel(data:createLabel){
        return this.labelRepository.addLabel(data)
    }

    async removeLabel(id:string){
        return this.labelRepository.removeLabel(id);
    }
}

export { LabelsService };
