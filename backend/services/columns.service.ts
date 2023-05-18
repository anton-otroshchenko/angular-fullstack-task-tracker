import {ColumnsRepository} from "../repositories/columns.repository";
import {createLabel} from "../../shared/types/label-post.type";

class ColumnsService {
    private columnRepository: ColumnsRepository;

    constructor(columnRepository: ColumnsRepository) {
        this.columnRepository = columnRepository;
    }

    async getLabels() {
        return this.columnRepository.getLabels();
    }

    async addLabel(data:createLabel){
        return this.columnRepository.addLabel(data)
    }
}

export { ColumnsService };
