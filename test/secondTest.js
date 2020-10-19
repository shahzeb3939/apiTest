const assert = require('assert')
const request = require('request')

describe('res Testing', () => {

    it('201 response code', () => {
        request.get('https://emumba-test.herokuapp.com/trend', (err, res, body) => {
            console.log('***** ***** *****')
            console.log(res.statusCode)
            console.log('***** ***** *****')
        })
    })

})