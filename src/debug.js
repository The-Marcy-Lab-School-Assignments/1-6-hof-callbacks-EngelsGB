const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
const logEachName = (names) => {
  names.forEach((e, i, a) => console.log(e, i, a));
};
logEachName(names);

const logEachUserBio = (users) => {
  users.forEach((e) => console.log(e.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
