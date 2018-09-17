'use strict'

const { URL } = require('url')

const REGEX_HTTP_PROTOCOL = /https?/i

module.exports = url => {
  try {
    return REGEX_HTTP_PROTOCOL.test(new URL(url).protocol)
  } catch (err) {
    return false
  }
}
