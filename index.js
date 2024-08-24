const icon = document.getElementById("icon");
const circleBtn = document.getElementById("circle-btn");
const hiddenText = document.getElementById("hidden-text");

icon.addEventListener("click", () => {
  icon.classList.toggle("icon");
  icon.classList == "icon"
    ? (icon.innerHTML = "<span style='font-size:2em;'>☎️</span>")
    : (icon.innerText = "this ");
});

circleBtn.addEventListener("click", () => {
  circleBtn.classList.add("hide");
  hiddenText.classList.remove("hide");
});
