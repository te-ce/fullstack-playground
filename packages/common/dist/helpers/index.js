const n = (e) => e == null, r = (e) => e && typeof e == "object", t = (e) => n(e) || Array.isArray(e) && e.length === 0 || r(e) && Object.keys(e).length === 0 || typeof e == "string" && e.trim().length === 0, s = (e, o) => Math.floor(Math.random() * (o - e + 1)) + e;
export {
  s as getRandomNumber,
  t as isBlank,
  n as isEmpty,
  r as isObject
};
