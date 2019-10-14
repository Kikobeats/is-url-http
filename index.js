'use strict'

const URL = global.window ? window.URL : require('url').URL
const urlRegex = require('url-regex')({ exact: true })

const REGEX_HTTP_PROTOCOL = /^https?:\/\//i

module.exports = url => {
  try {
    return new URL(url) && REGEX_HTTP_PROTOCOL.test(url) && urlRegex.test(url)
  } catch (err) {
    return false
  }
}
