let buttons = document.querySelectorAll("button");
let text = document.querySelector(".text");

//When pressing on any button except (C, <=, =), it will be printed on screen
for (let i = 1; i < buttons.length - 1; ++i) {
  if (i != 2 && i != 7)
    buttons[i].addEventListener("click", function () {
      if (text.textContent == "Expression Error") text.textContent = "";

      text.textContent = text.textContent + buttons[i].textContent;
    });
}

let c = document.querySelector("#c");
c.addEventListener("click", function () {
  text.textContent = "";
});

let remove = document.querySelector("#delete");
remove.addEventListener("click", function () {
  let str = text.textContent;
  str = str.slice(0, str.length - 1);
  text.textContent = str;
});

let divide = document.querySelector("#divide");
divide.addEventListener("click", function () {
  text.textContent = text.textContent + "/";
});

let multiply = document.querySelector("#multiply");
multiply.addEventListener("click", function () {
  text.textContent = text.textContent + "*";
});

let equal = document.querySelector("#equal");
equal.addEventListener("click", function () {
  let value = "";
  try {
    value = eval(text.textContent);
    text.textContent = value;
  } catch (error) {
    text.textContent = "Expression Error";
  }
});
