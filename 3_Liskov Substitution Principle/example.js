class Bird {
  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

//correct
class Eagle extends Bird {
  dive() {
    // ...
  }

  fly(speed) {
    return `soaring thought the sky at ${speed}`;
  }
}

//incorrect
class Penguin extends Bird {
  fly() {
    return new Error("Sorry, I can fly");
  }
}
