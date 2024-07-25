export default () => {
  // Your own project level JS may go here
  const url = 'http://localhost:3000/api/v1/third/rt2ogwi1mwrsr8a4yo0g4p19:en:published';

  getTopic(url);
};

async function getTopic(url) {
  const res = await apos.http.get(url, {});
  console.log('res', res);
  return res;
}
