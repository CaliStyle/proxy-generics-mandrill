# proxy-generics-mandrill

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Email Provider for Mandrillapp.com.

Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)
Looking for [Proxy Generics?](https://github.com/calistyle/trailpack-proxy-generics)

## Install

```sh
$ npm install --save proxy-generics-mandrill
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  // make the key mandrill, alternatively make the key email_provider to be the default email provider
  mandrill: {
      adapter: require('proxy-generic-mandrill'),
      options: {
          // Mandrill API key
          key: process.env.MANDRILL_APIKEY,
          // Host name for sending eg. cali-style.com
          host: process.env.MANDRILL_HOST,
          // Protocol for sending eg. https or http
          protocol: process.env.MANDRILL_PROTOCOL,
          // The ReplyTo field in Mandrill templates
          reply_to: process.env.MANDRILL_REPLY_TO
      }
  }
}
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-mandrill.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-mandrill
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-mandrill/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-mandrill/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-mandrill.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-mandrill
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-mandrill.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-mandrill

