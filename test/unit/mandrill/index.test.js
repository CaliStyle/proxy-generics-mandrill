'use strict'
/* global describe, it */
const assert = require('assert')
describe('Email Generic Mandrill', () => {
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

  it('should send email', (done) => {
    EmailGenericService.send({

    }, Mandrill)
      .then(response => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should send email template', (done) => {
    EmailGenericService.sendTemplate({

    }, Mandrill)
      .then(response => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })

})
