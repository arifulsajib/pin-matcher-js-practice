// generate btn
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () => {
  const generatedPin = generatePin();
  setValue("generated-input", generatedPin);
});

// indisplay numberpad
const numberpad = document.getElementById("number-pad");
numberpad.addEventListener("click", (e) => {
  const number = e.target.innerText;
  if (isNaN(number)) {
    if (number == "C") {
      clearInput();
    } else if (number == "<") {
      deleteLastDigit();
    }
  } else {
    addLastDigit(number);
  }
});

// submit btn
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
  const isPinMatched = pinMatched();
  if (isPinMatched) {
    toggleMessage(true);
  } else {
    toggleMessage(false);
  }
});
