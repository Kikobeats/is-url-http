'use strict'

const URL = global.window ? window.URL : require('url').URL

const REGEX_HTTP_PROTOCOL = /^https?:\/\//i

module.exports = url => {
  try {
    return new URL(url) && REGEX_HTTP_PROTOCOL.test(url)
  } catch (err) {
    return false
  }
}
