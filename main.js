const sun_moon = document.querySelector(".sun-moon");
document.querySelector(".theme-toggler").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const currentRotation = parseInt(
        getComputedStyle(sun_moon).getPropertyValue("--rotation")
    );
    sun_moon.style.setProperty("--rotation", currentRotation + 180);
});
