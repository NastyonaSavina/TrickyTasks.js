function getKeysArray(obj) {
  let str = [];

  for (const key in obj) {
    let mainKey = key;
    let itemValue = obj[key];
    let secondKeys = [];
    let nestedValues = [];

    if (typeof itemValue === 'object') {
      for (const key in itemValue) {
        secondKeys.push(key);
        const isNestedValue = itemValue[key];

        if (!Array.isArray(isNestedValue)) {
          secondKeys.map(secondKey => str.push(`${mainKey}.${secondKey}`));
          secondKeys = [];
        } else {
          nestedValues = isNestedValue;

          secondKeys.map(secondKey => {
            for (let i = 0; i < nestedValues.length; i += 1) {
              str.push(`${mainKey}.${secondKey}.${i}`);
            }
          });
        }
      }
    } else str.push(`${mainKey}`);
  }
  // console.log(str);
  return str;
}

getKeysArray({
  a: {
    b: 2,
    q: [0, 3, 4],
  },
  x: true,
  d: { f: null },
});
