describe('Request sent to /hipchatbot', () => {
    it('should post a message and get a 200 response', (done) => {
        request
            .post('/hipchatbot')
            .send({ "item":{ "message":{ "from":{ "name":"Joe User" }, "message":"Test Sentence" } }})
            .set('Content-Type', 'application/json')
            .expect(200)
            .expect(`{"message":"Joe User entered the following text: Test Sentence"}` )
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })
})

describe('Request to the wrong route', () => {
    it('should return a 404 response', (done) => {
        request
            .post('/hipchat')
            .expect(404)
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })
})

describe('Request with the wrong method', () => {
    it('should return a 404 response', (done) => {
        request
            .get('/hipchatbot')
            .expect(404)
            .end(function (err, res) {
                if (err) throw err
                done()
        })
    })
})

describe('Request with the wrong header', () => {
    it('should get a 500 response', (done) => {
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

describe('Request sent without a message body', () => {
    it('should get a 500 response', (done) => {
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