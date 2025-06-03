function generatePoem(event) { // ✅ Fixed "function"
  event.preventDefault();
  // ... gets user input and selects appropriate poem
  new Typewriter(poemElement, {
    strings: ["La tombe dit à la rose"], // ✅ Now an array
    autoStart: true,
    delay: 50,
    cursor: "|",
  });
}

let poemElement =document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem); // ✅ Fixed "addEventListener" and "submit"
// ✅ Added missing semicolon