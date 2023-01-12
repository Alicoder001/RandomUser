const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

const modeLocal = localStorage.getItem("mode");

if (modeLocal) {
	darkBtn.classList.toggle("hidden");
	lightBtn.classList.toggle("hidden");
	body.classList.toggle("dark-mode");
}

function darModeBtn() {
	darkBtn.classList.toggle("hidden");
	lightBtn.classList.toggle("hidden");
	body.classList.toggle("dark-mode");
}
darkBtn.addEventListener("click", () => {
	darModeBtn();
	localStorage.setItem("mode", "darkMode");
});
lightBtn.addEventListener("click", () => {
	darModeBtn();
	localStorage.setItem("mode", "");
});
