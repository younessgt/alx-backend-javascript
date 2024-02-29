function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      const data = { data: 'Successful response from the API' };
      resolve(data);
    }
  });
}
module.exports = getPaymentTokenFromAPI;
