const backButton = document.getElementById("backButton") as HTMLSpanElement;

backButton.addEventListener("click", () => {
  window.open("https://larry.engineer", "_self");
});
