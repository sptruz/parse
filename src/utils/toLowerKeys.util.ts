const toLowerKeys = (obj: any): any => {
  Object.keys(obj).forEach((key: string) => {
    const value = obj[key];
    delete obj[key];
    obj[key.toLowerCase()] = value;
  });

  return obj;
};

export default toLowerKeys;
