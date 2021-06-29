export default function camelCase(obj) {
  let newObj = {};
  for (let d in obj) {
    if (obj.hasOwnProperty(d)) {
      newObj[d.replace(/(\_\w)/g, (k) => k[1].toUpperCase())] = obj[d];
    }
  }
  return newObj;
}
