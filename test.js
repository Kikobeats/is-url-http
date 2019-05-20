'use strict'

const test = require('ava')

const isHttpUrl = require('./')

test('true', t => {
  t.is(isHttpUrl('http://kikobeats.com'), true)
  t.is(isHttpUrl('https://kikobeats.com'), true)
  t.is(isHttpUrl('https://www.kikobeats.com'), true)
  t.is(isHttpUrl('http://www.kikobeats.com'), true)
})

test('false', t => {
  t.is(isHttpUrl('http://Http://kikobeats.com'), false)
  t.is(isHttpUrl(), false)
  t.is(isHttpUrl('callto://'), false)
  t.is(isHttpUrl('mailto://'), false)
  t.is(isHttpUrl('httpsucks://lol.wtf'), false)
  t.is(isHttpUrl('http:!!!\0'), false)
})
