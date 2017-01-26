'use strict'
/* global describe, it */
const assert = require('assert')
describe('Email Generic Mandrill Negative Tests', () => {
  let EmailGenericService
  let Mandrill

  before((done) => {
    EmailGenericService = global.app.services.EmailGenericService
    Mandrill = global.app.config.proxyGenerics.mandrill
    done()
  })

  it('should exist', () => {
    assert(EmailGenericService)
    assert(Mandrill)
  })

})
