export default function getFullResponseFromAPI(success) {
  const msg = success;
  let promise = new Promise((resolve, reject) => {
    if (success) {
      const obj = {
        status: 200,
	body: 'Success',
      };
      resolve(obj);
    } else {
      reject(new Error('The fake API is not working currently')); 
    }
  });
  return promise;
}
