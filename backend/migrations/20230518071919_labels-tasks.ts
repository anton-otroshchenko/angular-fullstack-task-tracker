
import { type Knex } from 'knex';

const uuid = 'uuid_generate_v4()';

const LABELS_TASKS_TABLE_NAME = 'labels_tasks';

const LabelsTasksColumnName = {
    ID: 'id',
    LABEL_ID: 'label_id',
    TASK_ID: 'task_id'
};

function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .dropTableIfExists(LABELS_TASKS_TABLE_NAME)
        .createTable(LABELS_TASKS_TABLE_NAME, (table) => {
            table
                .uuid(LabelsTasksColumnName.ID)
                .primary()
                .defaultTo(knex.raw(uuid))
                .notNullable();
            table
                .uuid(LabelsTasksColumnName.LABEL_ID)
                .notNullable()
                .references('id')
                .inTable('labels')
                .onDelete('CASCADE');
            table
                .uuid(LabelsTasksColumnName.TASK_ID)
                .notNullable()
                .references('id')
                .inTable('tasks')
                .onDelete('CASCADE');
        })
}

function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists(LABELS_TASKS_TABLE_NAME)
        .raw('DROP EXTENSION IF EXISTS "uuid-ossp"');
}

export { down, up };
