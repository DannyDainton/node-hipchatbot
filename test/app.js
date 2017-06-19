const faker      = require('faker')
const randomWord = faker.random.word()

describe('Request sent to /hipchatbot', function() {
    it('should post a message and get a 200 response', function(done) {
        request
            .post('/hipchatbot')
            .send(`{ "item":{ "message":{ "from":{ "name": "Test User" }, "message": ${randomWord} } } }`)
            .set('Content-Type', 'application/json')
            .expect(200)
            .expect(`{"message":"Test User entered the following text: ${randomWord}"}` )
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })
})

describe('Request to the wrong route', function() {
    it('should return a 404 response', function(done) {
        request
            .post('/hipchat')
            .expect(404)
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })
})

describe('Request with the wrong method', function() {
    it('should return a 404 response', function(done) {
        request
            .get('/hipchatbot')
            .expect(404)
            .end(function (err, res) {
                if (err) throw err
                done()
        })
    })
})

describe('Request with the wrong header', function() {
    it('should get a 500 response', function(done) {
        request
            .post('/hipchatbot')
            .set('Content-Type', 'application/text')
            .expect(500)
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })
})

describe('Request sent without a message body', function() {
    it('should get a 500 response', function(done) {
        request
            .post('/hipchatbot')
            .set('Content-Type', 'application/json')
            .expect(500)
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })
})
