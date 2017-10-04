// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const keysArr = Object.keys(obj);
  const resultArr = [];
  for (let i = 0; i < keysArr.length; ++i) {
    resultArr.push(obj[keysArr[i]]);
  }
  return resultArr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keysArr = Object.keys(obj);
  for (let i = 0; i < keysArr.length; ++i) {
    obj[keysArr[i]] = cb(obj[keysArr[i]], keysArr[i]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const pairArr = [];
  const resultPairs = [];
  const keysArr = Object.keys(obj);
  for (let i = 0; i < keysArr.length; ++i) {
    const key = keysArr[i];
    const value = obj[keysArr[i]];
    pairArr.push([key, value]);
    resultPairs.push(pairArr[i]);
  }
  return resultPairs;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const keysArr = Object.keys(obj);
  const valuesArr = [];
  for (let i = 0; i < keysArr.length; ++i) {
    valuesArr.push(obj[keysArr[i]]);
  }
  const newObj = {};
  for (let i = 0; i < keysArr.length; ++i) {
    newObj[valuesArr[i]] = keysArr[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultPropsKeysArr = Object.keys(defaultProps);
  const objKeysArr = Object.keys(defaultProps);
  for (let i = 0; i < objKeysArr.length; ++i) {
    if (typeof obj[objKeysArr[i]] === 'undefined') {
      obj[objKeysArr[i]] = defaultProps[objKeysArr[i]];
    }
  }
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
