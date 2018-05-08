class Cast {

  static toNumber(value) {
    const n = Number(value);
    if (isNaN(n)) {
      return 0;
    }
    return n;
  }

  static toBoolean(value) {
    if (typeof value === 'boolean') {
      return value;
    }
    if (typeof value === 'string') {
      if ((value === '') ||
        (value === '0') ||
        (value.toLowerCase() === 'false')) {
        return false;
      }
      return true;
    }
    return Boolean(value);
  }
}

export default Cast;
