const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

describe('test sendPaymentRequestToApi', () => {
  it('Should test calculNumber function', () => {
    const wrappedCalculNumber = sinon.stub(Utils, 'calculateNumber');
    wrappedCalculNumber.returns(10);
    const wrappedConsoleLog = sinon.spy(console, 'log');

    const x = sendPaymentRequestToApi(100, 20);
    expect(wrappedCalculNumber.calledOnce).to.equal(true);
    expect(wrappedCalculNumber.calledWithExactly('SUM', 100, 20)).to.equal(true);
    expect(wrappedConsoleLog.calledWithExactly('The total is: 10')).to.equal(true);
    expect(x).to.equal(10);

    wrappedCalculNumber.restore();
    wrappedConsoleLog.restore();
  });
});
