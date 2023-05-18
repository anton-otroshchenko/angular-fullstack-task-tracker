import {ColumnsRepository} from "../repositories/columns.repository";
import {ColumnsService} from "../services/columns.service";
import {Columns} from "../models/columns.model";
import {FastifyInstance, FastifyRequest} from "fastify";
import {createLabel} from "../../shared/types/label-post.type";

const columnsRepository = new ColumnsRepository(Columns);

const columnsService = new ColumnsService(columnsRepository);

async function columnRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/columns', async (_, reply) => {
        const columns = await columnsService.getLabels();
        reply.send(columns);
    });
    fastify.post('/columns', async (request: FastifyRequest, reply) => {
        const data = request.body as createLabel;
        const columns = await columnsService.addLabel(data);
        reply.send(columns);
    });
}

export { columnRoutes }