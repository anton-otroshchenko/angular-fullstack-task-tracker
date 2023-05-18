
import { type Knex } from 'knex';

const uuid = 'uuid_generate_v4()';

const LABELS_TABLE_NAME = 'labels';
const COLUMNS_TABLE_NAME = 'columns';
const TASKS_TABLE_NAME = 'tasks';

const ColumnsColumnName = {
    ID: 'id',
    NAME: 'name',
};

const LabelsColumnName = {
    ID: 'id',
    NAME: 'name'
};

const TasksColumnName = {
    ID: 'id',
    TITLE: 'title',
    DETAILS: 'details',
    COLUMN_ID: 'columnId'
};

function up(knex: Knex): Promise<void> {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .dropTableIfExists(LABELS_TABLE_NAME)
        .dropTableIfExists(COLUMNS_TABLE_NAME)
        .createTable(LABELS_TABLE_NAME, (table) => {
            table
                .uuid(LabelsColumnName.ID)
                .primary()
                .defaultTo(knex.raw(uuid))
                .notNullable();
            table.string(LabelsColumnName.NAME).unique();
        })
        .createTable(COLUMNS_TABLE_NAME, (table) => {
            table
                .uuid(ColumnsColumnName.ID)
                .primary()
                .defaultTo(knex.raw(uuid))
                .notNullable();
            table.string(ColumnsColumnName.NAME).unique();
        })
        .createTable(TASKS_TABLE_NAME, (table) => {
            table
                .uuid(ColumnsColumnName.ID)
                .primary()
                .defaultTo(knex.raw(uuid))
                .notNullable();
            table.string(TasksColumnName.TITLE).unique();
            table.string(TasksColumnName.DETAILS);
            table
                .uuid(TasksColumnName.COLUMN_ID)
                .references('id')
                .inTable('columns')
                .onDelete('CASCADE');
        })
}

function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists(LABELS_TABLE_NAME)
        .dropTableIfExists(COLUMNS_TABLE_NAME)
        .dropTableIfExists(TASKS_TABLE_NAME)
        .raw('DROP EXTENSION IF EXISTS "uuid-ossp"');
}

export { down, up };