const aboutToggler = document.getElementById("aboutToggler") as HTMLSpanElement;
const aboutImg = document.getElementById("aboutImg") as HTMLImageElement;
const aboutTab = document.getElementById("aboutTab") as HTMLDivElement;
const validatorToggler = document.getElementById("validatorToggler") as HTMLSpanElement;
const validatorLeftImg = document.getElementById("validatorLeftImg") as HTMLImageElement;
const validatorRightImg = document.getElementById("validatorRightImg") as HTMLImageElement;
const validatorTab = document.getElementById("validatorTab") as HTMLDivElement;

let currentTab: "about" | "validator" = "about";

aboutToggler.addEventListener("click", () => {
  if (currentTab === "validator") {
    currentTab = "about";
    aboutToggler.classList.remove("selectable");
    aboutImg.style.display = "block";
    aboutTab.style.display = "block";
    validatorToggler.classList.add("selectable");
    validatorLeftImg.style.display = "none";
    validatorRightImg.style.display = "none";
    validatorTab.style.display = "none";
  }
});

validatorToggler.addEventListener("click", () => {
  if (currentTab === "about") {
    currentTab = "validator";
    aboutToggler.classList.add("selectable");
    aboutImg.style.display = "none";
    aboutTab.style.display = "none";
    validatorToggler.classList.remove("selectable");
    validatorLeftImg.style.display = "block";
    validatorRightImg.style.display = "block";
    validatorTab.style.display = "block";
  }
});

const axlStakeBtn = document.getElementById("axlStakeBtn") as HTMLDivElement;
const osmoStakeBtn = document.getElementById("osmoStakeBtn") as HTMLDivElement;

axlStakeBtn.addEventListener("click", () => {
  window.open(
    "https://wallet.keplr.app/#/axelar/stake?modal=detail&validator=axelarvaloper16d6dhjl8r3h9yggxlnr8va9k3l8kjvry40c3ug"
  );
});

osmoStakeBtn.addEventListener("click", () => {
  window.open(
    "https://wallet.keplr.app/#/osmosis/stake?modal=detail&validator=osmovaloper1zlymlax05tg9km9jyw496jx60v86m454a3xf3m"
  );
});
