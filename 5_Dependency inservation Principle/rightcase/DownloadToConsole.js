import { doGet } from "./utils.js";

const url = "https://jsonplaceholder.typicode.com/posts";
class Example {
  constructor() {
    // ...
  }
  downloadDataFromAPI(params) {
    doGet(url).then((r) => {
      console.log("Posts:" + r);
    });
  }
}
