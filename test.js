'use strict'

const test = require('ava')

;[{ fn: require('.') }, { fn: require('./lightweight'), isLightweight: true }].forEach(
  ({ fn: isHttpUrl, isLightweight }) => {
    test(isLightweight ? 'lightweight » true' : 'true', t => {
      t.is(isHttpUrl('http://kikobeats.com'), true)
      t.is(isHttpUrl('https://kikobeats.com'), true)
      t.is(isHttpUrl('https://www.kikobeats.com'), true)
      t.is(isHttpUrl('http://www.kikobeats.com'), true)
      t.is(
        isHttpUrl(
          'http://www.ccrscenter.org/sites/default/files/CCRS%20District%20Practices%20Brief.pdf'
        ),
        true
      )
    })

    test(isLightweight ? 'lightweight » false' : 'false', t => {
      if (!isLightweight) t.is(isHttpUrl('http://Http://kikobeats.com'), false)
      t.is(isHttpUrl('https://. • 3.7M views'), false)
      t.is(isHttpUrl(), false)
      t.is(isHttpUrl('callto://'), false)
      t.is(isHttpUrl('mailto://'), false)
      t.is(isHttpUrl('httpsucks://lol.wtf'), false)
      if (!isLightweight) t.is(isHttpUrl('http:!!!\0'), false)
    })
  }
)
