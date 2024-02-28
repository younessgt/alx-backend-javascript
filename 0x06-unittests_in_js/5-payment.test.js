const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment');

describe('test with hooks function', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should return The Total is 20', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleLogSpy.calledOnce).to.equal(true);
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.equal(true);
  });
  it('should return The Total is 120', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleLogSpy.calledOnce).to.equal(true);
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.equal(true);
  });
});
