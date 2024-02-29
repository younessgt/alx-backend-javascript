const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', () => {
  it('should return object', () => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch((err) => {
      done(err);
    });
  });
});
