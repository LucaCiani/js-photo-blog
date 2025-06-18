const rowEl = document.querySelector(".row");

const modalEl = document.querySelector(".my-modal");

const modalImg = document.querySelector("#modal-img");

const closeModal = document.querySelector(".close");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((element) => {
            rowEl.innerHTML += `<div class="col">
    <div class="card shadow-lg">
        <img class="pin" src="./assets/img/pin.svg" alt="pin">
        <img class="card-image" src="${element.url}" alt="${element.title}" />
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
        </div>
    </div>
    </div>`;
            const cardEl = document.querySelectorAll(".card");
            cardEl.forEach((card) => {
                card.addEventListener("click", () => {
                    modalEl.style.display = "block";
                    const img = card.querySelector(".card-image");
                    modalImg.src = img.src;
                    modalImg.alt = img.alt;
                });
            });
        });
    });

closeModal.addEventListener("click", () => {
    modalEl.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == modalEl) {
        modalEl.style.display = "none";
    }
};
