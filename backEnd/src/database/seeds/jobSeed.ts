import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('jobs').del();

    // Inserts seed entries
    await knex('jobs').insert([
        { 
            title : 'Python Senior Developer', 
            time : 'Full time',
            description : 'this is work to Senior developer',
            technology : 'Python'
        },

        { 
            title : 'Node Senior Developer', 
            time : 'Part time',
            description : 'this is work to Senior developer',
            technology : 'Node'
        },
        
        { 
            title : 'Java Senior Developer', 
            time : 'Part time',
            description : 'this is work to Senior developer',
            technology : 'Java'
        },
    ]);
};
