const clone = function(src, target) {
  if (src === null) return src;

  for (var attr in target) {
    if (target.hasOwnProperty(attr)) src[attr] = target[attr];
  }
  return src;
};

export default clone;
