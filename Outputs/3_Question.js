const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
const p4 = Promise.reject(4);
const p5 = Promise.resolve(5);
const p6 = Promise.reject(6);

const promiseAll = async () => {
  console.log(1);
  const group1 = await Promise.all([p1, p2]);
  console.log(2, group1);
  const group2 = await Promise.allSettled([p3, p4]);
  console.log(3, group2);
  const group3 = await Promise.any([p5, p6]); // return 1st resolved promise
  console.log(4, group3);

  return [group1, group2, group3];
};

promiseAll().then(console.log).catch(console.log);
