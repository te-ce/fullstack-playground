import { z as t } from "zod";
const r = t.object({
  author: t.string(),
  title: t.string(),
  description: t.string(),
  id: t.number()
}), o = t.array(r);
export {
  o as a,
  r as n
};
