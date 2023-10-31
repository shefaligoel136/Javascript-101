Promise.resolve(1)
  .then((data) => {
    console.log(data);
    return 2;
  })
  .then((data) => {
    console.log(data);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return value * 3;
  })
  .then((data) => {
    Promise.resolve(data)
      .finally((data) => {
        console.log("finally...1", data);
        return 100;
      })
      .then((data) => console.log("then", data))
      .finally(() => {
        console.log("finally...2");
        return 200;
      });
  });
