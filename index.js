/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-knex
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
const KnexCtor = require('knex')

exports.options = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
}

exports.metadata = {
  frameworkVersion: 6,
  name: 'Knex',
  type: 'service',
  param: 'Knex',
}

exports.plugin = {
  load: function(Options, Logger) {

    let client = KnexCtor(Options)
    return client
  },
  stop: function(Logger, Knex){
    Logger.log('Attempting to close DB connection.')
    return Knex.destroy()
  }
}
