import { LabelsRepository } from "../repositories/labels.repository";
import { LabelsService } from "../services/labels.service";
import { Labels } from "../models/labels.model";
import {FastifyInstance, FastifyRequest} from "fastify";
import {createLabel} from "../../shared/types/label-post.type";

const labelsRepository = new LabelsRepository(Labels);

export const labelsService = new LabelsService(labelsRepository);

async function labelsRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/labels', async (_, reply) => {
        const labels = await labelsService.getLabels();
        reply.send(labels);
    });
    fastify.post('/labels', async (request: FastifyRequest, reply) => {
        const data = request.body as createLabel;
        const labels = await labelsService.addLabel(data);
        reply.send(labels);
    });
    fastify.delete('/labels/:id', async (request: FastifyRequest, reply) => {
        const { id } = request.params as { id: string };
        const labels = await labelsService.removeLabel(id);
        reply.send(labels);
    });
}

export { labelsRoutes }