let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked: ", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "style.css";
  }
  if (mode == "sunset") {
    document.getElementById("theme-style").href = "sunset.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
  if (mode == "fantasy") {
    document.getElementById("theme-style").href = "fantasy.css";
  }
  if (mode == "dark") {
    document.getElementById("theme-style").href = "dark.css";
  }
  localStorage.setItem("theme", mode);

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  localStorage.setItem("theme", mode);

  if (mode == "sand") {
    document.getElementById("theme-style").href = "sand.css";
  }
  localStorage.setItem("theme", mode);
}
