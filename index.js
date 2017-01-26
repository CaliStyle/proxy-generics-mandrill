/* eslint no-console: [0] */
'use strict'
const mandrill = require('mandrill-api/mandrill')

module.exports = class ProxyGenericsMandrill {
  constructor(options) {
    this.options = options
  }

  /**
   * Create Mandrill Instance
   * @returns {*} Mandrill Instance
   */
  mandrill() {
    return new mandrill.Mandrill(this.options.key)
  }

  send(data) {
    return Promise.resolve(data)
  }

  sendTemplate(data) {
    return Promise.resolve(data)
  }
}

