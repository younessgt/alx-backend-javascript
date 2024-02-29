const { expect } = require('chai');
const request = require('request');

describe('test server', () => {
  it('should return the correct status code and response', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
