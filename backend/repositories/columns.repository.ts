import { Columns } from "../models/columns.model";
import { type createLabel } from '../../shared/types/label-post.type';
class ColumnsRepository {
    private model: typeof Columns;

    constructor(model: typeof Columns) {
        this.model = model;
    }

    async getLabels() {
        return this.model.query();
    }

    async addLabel(data:createLabel){
        return this.model.query().insert(data);
    }
}

export { ColumnsRepository };
