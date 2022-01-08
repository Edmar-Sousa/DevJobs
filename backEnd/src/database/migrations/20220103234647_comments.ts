import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('comments', (table : any) => {
        table.increments('commentId').primary()
        table.string('body')

        table.integer('jobId').unsigned()
        table.foreign('jobId').references('jobs.jobId').onDelete('CASCADE')

        table.integer('userId').unsigned()
        table.foreign('userId').references('users.userId').onDelete('CASCADE')

        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('comments')
}

