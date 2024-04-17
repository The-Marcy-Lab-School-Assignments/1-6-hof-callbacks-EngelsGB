const myForEach = (arr, callback) => {
  if(arr === undefined || callback === undefined) return undefined;
  for (const value of arr) {
    callback(value);
  }
};

const myMap = (arr, callback) => {
  const res = [];
  for (const i of arr) {
    res.push(callback(i));
  }
  return res;
};

const myFind = (arr, callback) => {
  for (const i of arr) {
    if (callback(i)) return i;
  }
  return undefined;
};

const myFilter = (arr, callback) => {
  const res = [];
  for (const i of arr) {
    if (callback(i)) res.push(i);
  }
  return res;
};

const sortWords = (arr) => {
  return arr.toSorted();
};

const sortNumbers = (arr) => {
  return arr.toSorted((a, b) => a - b);
};

const sortNumbersBetter = (arr, isDescending) => {
  if (isDescending) return arr.toSorted((a,b) => b - a);
  else return arr.toSorted((a,b) => a - b);
};

const sortUsersByOrder = (arr) => {
  const newArr = [];
  const order = [];
  for (const i of arr) {
    order.push(i.order);
  }
  order.sort((a,b) => a - b);
  for (const i of order) {
    for (const j of arr) {
      if(i === j.order) newArr.push(j);
    }
  }
  return newArr;
};

const sortUsersByName = (arr) => {
  const newArr = [];
  const names = [];
  for (const i of arr) {
    names.push(i.name);
  }
  names.sort();
  for (const i of names) {
    for (const j of arr) {
      if(i === j.name) newArr.push(j);
    }
  }
  return newArr;
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
