'use strict'

const { URL } = require('url')
const urlRegex = require('url-regex')({ exact: true })

const REGEX_HTTP_PROTOCOL = /^https?:\/\//i

module.exports = url => {
  try {
    const { href } = new URL(url)
    return REGEX_HTTP_PROTOCOL.test(href) && urlRegex.test(href)
  } catch (err) {
    return false
  }
}
