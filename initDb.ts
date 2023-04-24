import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify';

const fp = require('fastify-plugin');

function initializeDatabaseTableWithBaseSettingsPlugin(fastify: FastifyInstance, opts: FastifyPluginOptions,
                                            done: FastifyPluginCallback) {
  fastify.decorate('initializeDatabaseTableWithBaseSettings', async () => {
    const { serviceName } = opts;
    try{
      // @ts-ignore
      const exists = await fastify.knex.schema.hasTable(serviceName);
      if (!exists) {
        // @ts-ignore
        const createTable = await fastify.knex.schema.createTable(serviceName, (table: any) => {
          table.increments('id').primary();
          table.integer('beneficiary_id').unsigned();
          table.integer('payer_id').unsigned();
          table.string('status');
          table.timestamp('created_at', { useTz: true });
          table.timestamp('updated_at', { useTz: true });
          table.string('transaction_type');
          table.decimal('amount', 10, 2);
          table.string('currency');
          table.text('comment');
          table.integer('payment_id')/*.unsigned()*/;
          table.integer('property_id').unsigned();

          /*table.foreign("payment_id").references("id").inTable("property").onDelete("CASCADE");*/
          table.foreign("beneficiary_id").references("id").inTable("user").onDelete("CASCADE");
          table.foreign("property_id").references("id").inTable("property").onDelete("CASCADE");
          table.foreign("payer_id").references("id").inTable("user").onDelete("CASCADE");
        });
        fastify.log.info('Database Table with name ' + serviceName + ' was created ==> ' + exists);
        return createTable;
      }
      fastify.log.info('Database Table with name ' + serviceName + ' exists ==> ' + exists);
      return exists;
    }catch (error : any) {
      fastify.log.error('Error in database ' + serviceName,  error.message);
      throw new Error(error.message);
    }
  });
  // @ts-ignore
  done();
}

module.exports = fp(initializeDatabaseTableWithBaseSettingsPlugin,
  { fastify: '>=1.0.0', name: 'database-plugin' });