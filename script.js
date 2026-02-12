const card = document.getElementById("card");
const noBtn = document.getElementById("noBtn");
const bigYes = document.getElementById("bigYes");

card.addEventListener("click", () => {
    card.classList.add("open");

    setTimeout(() => {
        bigYes.classList.add("show");
    }, 3000);
});

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function sayYes() {
    document.getElementById("response").textContent =
        "¡Vamos por unos rollos de Sushi! 💕🥰";
}

const sunflowers = document.querySelectorAll(".sunflowers");

card.addEventListener("click", () => {
    card.classList.add("open");

    sunflowers.forEach(flower => {
        flower.style.transform = "translateY(-50%) scale(1)";
    });

    setTimeout(() => {
        bigYes.classList.add("show");
    }, 3000);
});
