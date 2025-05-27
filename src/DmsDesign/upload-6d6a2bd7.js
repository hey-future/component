import { t as d } from "./index-83341b0a.js";
function s(t, e) {
  const o = new FormData();
  o.set("file", e);
  let a = "uploadDoc";
  return e.type.includes("image") ? a = "uploadFile" : (e.type.includes("video") || e.type.includes("audio") || e.name.includes(".glb")) && (a = "uploadMedia"), d({
    url: `/dms/screen/${a}/id/${t}`,
    method: "post",
    data: o,
    headers: {
      "Content-Type": "x-www-form-urlencoded"
    }
  });
}
export {
  s as u
};
