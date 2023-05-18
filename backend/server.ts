import fastify from 'fastify';
import { labelsRoutes } from "./apis/labels.api";
import knex, { Knex } from 'knex';
import knexConfig from './knexfile';
import {Model} from "objection";
import {columnRoutes} from "./apis/columns.api";
import {tasksRoutes} from "./apis/tasks.api";


const server = fastify();

server.register(labelsRoutes);
server.register(columnRoutes);
server.register(tasksRoutes);

const knexInstance: Knex = knex(knexConfig);

Model.knex(knexInstance);

server.register(require('fastify-cors'));


server.listen(3000, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Server running on port 3000');
});
``
