function generatePoem(event) { // ✅ Fixed "function"
  event.preventDefault();
  // ... gets user input and selects appropriate poem

function displayPoem(response) { 
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
};
  let userInstructionElement= document.querySelector("#user-instructions");
  
  let apikey="t81ae7844b0b73afbd3084e3oaf0abff";
  let prompt = `Write a poem about ${userInstructionElement.value}`; // ✅ Fixed "userInstructionElement.value"
  let context = `The poem should be in French and have a melancholic tone, ensuring it follows the user instructions as given below.`;
//create apiurl
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
 
  console.log("generating poem");
  console.log(`prompt: $(prompt)`);
  console.log(`context: $(context`);
axios.get(apiUrl).then(displayPoem)
  
}

let poemElement =document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem); // ✅ Fixed "addEventListener" and "submit"
// ✅ Added missing semicolon