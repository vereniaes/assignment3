const Typed = require("typed.js");
const typed = new Typed("#textTyped", {
  strings: ["I am a computer science collage student!", "Nice to meet you~"],
  typeSpeed: 80,
  loop: true,
  backDelay: 1000,
  cursorChar: "_",
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
});