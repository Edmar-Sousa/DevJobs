import knexfile    from '../../../knexfile'
import knexmodule  from 'knex'


const knex = knexmodule(knexfile.development)

export default knex
