// buttons
const modeToggle = document.getElementById("mode-toggle");
const content = document.querySelector(".content");

// light and dark toggle
const savedMode = localStorage.getItem("background-mode");

function setBackgroundMode(mode) {
    if (mode === "dark") {
        // dark
        document.body.classList.add("dark-background");
        localStorage.setItem("background-mode", "dark");
    } else if (mode === "light") {
        // light
        document.body.classList.remove("dark-background");
        localStorage.setItem("background-mode", "light");
    }
}

// clicking so it works
modeToggle.addEventListener("click", () => {
    const currentMode = document.body.classList.contains("dark-background") ? "light" : "dark";
    setBackgroundMode(currentMode);
});

// sets initial background mode
if (savedMode === "dark") {
    setBackgroundMode("dark");
} else if (savedMode === "light") {
    setBackgroundMode("light");
}
