import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('comments').del();

    await knex('comments').insert([
        { 
            body   : 'cool <3 ;)',
            jobId  : 1,
            userId : 1
        },

        { 
            body   : 'cool <3 :)',
            jobId  : 1,
            userId : 1
        },
    ]);
};
