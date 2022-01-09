'use strict'

const test = require('ava')

;[{ fn: require('.') }, { fn: require('./lightweight'), isLightweight: true }].forEach(
  ({ fn: isHttpUrl, isLightweight }) => {
    test(isLightweight ? 'lightweight » true' : 'true', t => {
      t.true(isHttpUrl('http://kikobeats.com'))
      t.true(isHttpUrl("https://en.wikipedia.org/wiki/Amdahl's_law"))
      t.true(isHttpUrl('https://kikobeats.com'))
      t.true(isHttpUrl('https://www.kikobeats.com'))
      t.true(isHttpUrl('http://www.kikobeats.com'))
      t.true(
        isHttpUrl(
          'http://www.ccrscenter.org/sites/default/files/CCRS%20District%20Practices%20Brief.pdf'
        )
      )
    })

    test(isLightweight ? 'lightweight » false' : 'false', t => {
      if (!isLightweight) t.false(isHttpUrl('http://Http://kikobeats.com'))
      t.false(isHttpUrl('https://. • 3.7M views'))
      t.false(isHttpUrl())
      t.false(isHttpUrl('callto://'))
      t.false(isHttpUrl('mailto://'))
      t.false(isHttpUrl('httpsucks://lol.wtf'))
      if (!isLightweight) t.false(isHttpUrl('https://admin:admin@test-http-login.vercel.app'))
      if (!isLightweight) t.false(isHttpUrl('http:!!!\0'))
    })
  }
)
