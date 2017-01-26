'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('../api'),
  config: {
    main: {
      packs: [
        require('trailpack-proxy-generics')
      ]
    },
    proxyGenerics: {
      mandrill: {
        adapter: require('../'),
        options: {
          // Mandrill API key
          key: process.env.MANDRILL_APIKEY,
          // Host name for sending eg. cal-style.com
          host: process.env.MANDRILL_HOST,
          // Protocol for sending eg. https or http
          protocol: process.env.MANDRILL_PROTOCOL,
          // The ReplyTo field in Mandrill templates
          reply_to: process.env.MANDRILL_REPLY_TO
        }
      }
    }
  }
}, smokesignals.FailsafeConfig)


