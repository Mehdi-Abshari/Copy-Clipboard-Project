// button copy varibale
const copyBtn = document.querySelector("button");
// textarea varibale
const textArea = document.querySelector("textarea");

// click event listener
copyBtn.addEventListener("click", () => {
  // textarea selection
  textArea.select();
  // textValue varibale
  let textValue = textArea.value;

  // navigator clipboard copied
  navigator.clipboard.writeText(textValue);
  // button copy inner
  copyBtn.innerText = "Copied !";
  // button copy background style
  copyBtn.style.backgroundColor = "#03a9f4";

  // time out set
  setTimeout(
    () => {
      // after time out set button copy inner
      copyBtn.innerText = "Copy it";
      // after time out set button copy background style
      copyBtn.style.backgroundColor = "#b3e5fc";
    },
    // time in milliseconds
    1500
  );
});
