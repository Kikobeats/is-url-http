'use strict'
const httpUrl = require('url-http/lightweight')
module.exports = url => httpUrl(url) && true
