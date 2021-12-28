import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('users').del();

    await knex('users').insert([
        { 
            userName : 'usuario teste', 
            password : '1234',
            email    : 'usuarioTeste@gmail.com'
        },
    ]);
};
