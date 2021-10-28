const url = "https://jsonplaceholder.typicode.com/posts";
class Example {
  constructor() {
    // ...
  }
  downloadDataFromAPI(params) {
    //1.
    fetch(url, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("Posts:" + r);
      });
  }
}
