const h1 = document.querySelector("h1");

const h2 = document.querySelector(".art-title");

const input = document.querySelector("input");

const buttons = document.querySelectorAll("button");

function handleClick(event) {
  const currentFontSize =
    Number.parseFloat(getComputedStyle(h2).getPropertyValue("--font-size")) +
    0.05;
  if (event.target.id === "increase") {
    h2.style.setProperty("--font-size", currentFontSize + 0.05 + "em");
  } else {
    h2.style.setProperty("--font-size", currentFontSize - 0.05 + "em");
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});

input.addEventListener("input", function (event) {
  h1.style.setProperty("--color", event.target.value);
});
