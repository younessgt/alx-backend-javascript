const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

describe('test sendPaymentRequestToApi', () => {
  it('Should test calculNumber function', () => {
    const wrappedCalculNumber = sinon.spy(Utils, 'calculateNumber');
    const wrappedConsoleLog = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(wrappedCalculNumber.calledOnce).to.equal(true);
    expect(wrappedCalculNumber.calledWithExactly('SUM', 100, 20)).to.equal(true);
    expect(wrappedConsoleLog.calledWithExactly('The total is: 120')).to.equal(true);

    wrappedCalculNumber.restore();
    wrappedConsoleLog.restore();
  });
});
