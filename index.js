'use strict'

const { URL } = require('url')
const urlRegex = require('url-regex')({ exact: true })

const REGEX_HTTP_PROTOCOL = /^https?:\/\//i

module.exports = url => {
  try {
    return new URL(url) && REGEX_HTTP_PROTOCOL.test(url) && urlRegex.test(url)
  } catch (err) {
    return false
  }
}
