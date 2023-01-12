// const { json } = require("stream/consumers");

// api
const api = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

function loader(load) {
	if (load) {
		overlay.classList.remove("hidden");
	} else {
		overlay.classList.add("hidden");
	}
}

function getData(callback) {
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", () => {
		const readySt = request.readyState;
		if (readySt < 4) {
			loader(true);
		} else if (readySt == 4 && request.status == 200) {
			const data = JSON.parse(request.responseText).results;
			callback(undefined, data);
			loader(false);
		} else if (readySt == 4) {
			callback("error", undefined);
			loader(false);
		}
	});

	request.open("GET", api);
	request.send();
}

function reload() {
	getData((err, data) => {
		if (data) {
			updateUI(data);
		} else updateUI(err);
	});
}
reload();
