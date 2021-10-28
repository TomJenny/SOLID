export const doGet = (url) => {
  //2.
  return fetch(url, {
    method: "GET",
    mode: "same-origin",
    //    ...
  }).then((r) => r.json());
};
