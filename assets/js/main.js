const rowEl = document.querySelector(".row");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((element) => {
            rowEl.innerHTML += `<div class="col">
    <div class="card shadow-lg">
        <img class="pin" src="./assets/img/pin.svg" alt="pin">
        <img src="${element.url}" alt="${element.title}" />
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
        </div>
    </div>
</div>`;
        });
    });

// MODAL JS

const modal = document.querySelector(".my-modal");

const closeModal = document.querySelector(".close");
