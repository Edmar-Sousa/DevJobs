import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('jobs', function (table : any) {
        table.increments('jobId').primary()
        table.string('title')
        table.string('time')
        table.string('description')
        table.string('technology')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('jobs')
}

