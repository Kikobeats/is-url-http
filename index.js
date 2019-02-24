'use strict'

const { URL } = require('url')

const REGEX_HTTP_PROTOCOL = /^https?:\/\//i

module.exports = url => {
  try {
    return new URL(url) && REGEX_HTTP_PROTOCOL.test(url)
  } catch (err) {
    return false
  }
}
