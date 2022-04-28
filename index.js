'use strict'
const httpUrl = require('url-http')
module.exports = url => httpUrl(url) && true
