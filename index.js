document.getElementById("color-button").addEventListener("click", () => {
    document.getElementById("real-color-input").click();
});

document.getElementById("real-color-input").addEventListener("input", (e) => {
    const color = e.target.value;
    document.getElementById("color-button").style.background = color;
    document.documentElement.style.setProperty("--clr-primary", color);
});
