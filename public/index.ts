const aboutToggler = document.getElementById("aboutToggler") as HTMLSpanElement;
const aboutTab = document.getElementById("aboutTab") as HTMLDivElement;
const validatorToggler = document.getElementById("validatorToggler") as HTMLSpanElement;
const validatorTab = document.getElementById("validatorTab") as HTMLDivElement;
const votesToggler = document.getElementById("votesToggler") as HTMLSpanElement;
const votesTab = document.getElementById("votesTab") as HTMLDivElement;

let currentTab: "about" | "validator" | "votes" = "about";

aboutToggler.addEventListener("click", () => {
  if (currentTab !== "about") {
    currentTab = "about";

    aboutToggler.classList.remove("selectable");
    aboutTab.style.display = "block";

    validatorToggler.classList.add("selectable");
    validatorTab.style.display = "none";

    votesToggler.classList.add("selectable");
    votesTab.style.display = "none";
  }
});

validatorToggler.addEventListener("click", () => {
  if (currentTab !== "validator") {
    currentTab = "validator";

    aboutToggler.classList.add("selectable");
    aboutTab.style.display = "none";

    validatorToggler.classList.remove("selectable");
    validatorTab.style.display = "block";

    votesToggler.classList.add("selectable");
    votesTab.style.display = "none";
  }
});

votesToggler.addEventListener("click", () => {
  if (currentTab !== "votes") {
    currentTab = "votes";

    aboutToggler.classList.add("selectable");
    aboutTab.style.display = "none";

    validatorToggler.classList.add("selectable");
    validatorTab.style.display = "none";

    votesToggler.classList.remove("selectable");
    votesTab.style.display = "block";
  }
});

const osmoStakeBtn = document.getElementById("osmoStakeBtn") as HTMLDivElement;

osmoStakeBtn.addEventListener("click", () => {
  window.open(
    "https://www.mintscan.io/osmosis/validators/osmovaloper1zlymlax05tg9km9jyw496jx60v86m454a3xf3m"
  );
});
