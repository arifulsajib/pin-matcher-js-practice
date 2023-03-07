// function get value
const getValue = (ID) => {
  const element = document.getElementById(ID);
  const value = element.value;
  return value;
};

// function set value
const setValue = (ID, value) => {
  const element = document.getElementById(ID);
  element.value = value;
};

// function 4 digit Pin
const generatePin = () => {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    console.log("pin not 3 digit found", pin);
    return generatePin();
  }
};

// function PinMatched
const pinMatched = () => {
  const generatedPin = getValue("generated-input");
  const typedPin = getValue("typed-input");
  if (generatedPin === typedPin) {
    return true;
  } else {
    return false;
  }
};

// function clear input
const clearInput = () => {
  const element = document.getElementById("typed-input");
  element.value = "";
};

// function backbtn delete last digit of a number
const deleteLastDigit = () => {
  const currentNumber = getValue("typed-input");
  const currentNumberArr = currentNumber.split("");
  currentNumberArr.pop();
  const newNumber = currentNumberArr.join("");
  setValue("typed-input", newNumber);
};

// function to add digit to the last of previous number
const addLastDigit = (digitToADD) => {
  const currentNumber = getValue("typed-input");
  const newNumber = currentNumber + digitToADD;
  setValue("typed-input", newNumber);
};

// toggle Error message
const toggleMessage = (isSuccess) => {
  const successMsg = document.getElementById("success-msg");
  const ErrorMsg = document.getElementById("error-msg");

  if (isSuccess) {
    successMsg.classList.remove("d-none");
    ErrorMsg.classList.add("d-none");
  } else {
    successMsg.classList.add("d-none");
    ErrorMsg.classList.remove("d-none");
  }
};
