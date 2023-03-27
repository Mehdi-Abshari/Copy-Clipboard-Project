/* 
  name: copy clipboard project JS file;
  developer: Mehdi-Abshari;
  production date: 1401-09-14;
  description: ... .; 
*/

// Selecting body
const body = document.querySelector('body'),
// Create div for container
 container = document.createElement('div'),
// Create textArea for typing text
 textAreaCr = document.createElement('textarea'),
// Create button for copy text
 button = document.createElement('button'),
// button copy variable
 copyBtn = document.querySelector("button"),
// textarea variable
 textArea = document.querySelector("textarea");

 // Set class for container
container.classList.add('container');
// Set attribute for textArea
textAreaCr.setAttribute('placeholder' , 'Type something ...');
// Appending textAreaCr to container
container.appendChild(textAreaCr);
// Set inner text for button
button.innerText = 'Copy it';
// Appending button to container
container.appendChild(button);
// Appending container to body
body.appendChild(container);

// click event listener
copyBtn.addEventListener("click", () => {
  // textarea selection
  textArea.select();
  // textValue variable
  let textValue = textArea.value;

  // navigator clipboard copied
  navigator.clipboard.writeText(textValue);
  // button copy inner
  copyBtn.innerText = "Copied !";
  // button copy background style
  copyBtn.style.backgroundColor = "#1d7773";

  // time out set
  setTimeout(
    () => {
      // after time out set button copy inner
      copyBtn.innerText = "Copy it";
      // after time out set button copy background style
      copyBtn.style.backgroundColor = "rgba(29, 119, 115, 0.8)";
    },
    // time in milliseconds
    1500
  );
});
