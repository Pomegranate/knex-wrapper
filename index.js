/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-knex
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
const KnexCtor = require('knex')
const pg = require('pg')
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
  load: function(Options, PluginFiles, Injector, Logger) {
    console.log(Options)
    let client = KnexCtor(Options)
    return client
  },
  stop: function(Knex){
    console.log(Knex)
  }
}
