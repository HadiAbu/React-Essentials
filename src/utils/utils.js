export const utilsSortFunc = (a, b, key) => {
  if (a[key] > b[key]) return 1;
  else if (a[key] < b[key]) return -1;
  return 0;
};

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer); //remove the previous timeout
    //create a new timeout to override the previous one
    timer = setTimeout(() => {
      //this is a good example of currying
      func.apply(this, args);
    }, timeout);
  };
}
