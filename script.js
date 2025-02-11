const loadButton = document.querySelector(".main--button-load")
const mainWrap = document.querySelector(".main--wrap")
const footerWrap = document.querySelector(".footer--wrap")
const loaderWrap = document.querySelector(".main--loader")


function footerPosition() {
    footerWrap.style.position = "static";
}

function showLoader() {
loaderWrap.style.display = "flex";
}

function hideLoader() {
loaderWrap.style.display = "none";
}


const fetchData = () => {
    showLoader();
    console.log('Показан лоадер');
    fetch("https://dog.ceo/api/breeds/image/random/20")
        .then(res => {
            if (!res.ok) {
                throw new Error("Ошибка загрузки");
            }
            console.log('Загрузка выполнена');
            return res.json();
        })
        .then(data => {
            if (!Array.isArray(data.message)) {
                throw new Error("Ощибка загрузки");
            }
            data.message.forEach((imageUrl) => {
                const dogImage = document.createElement("img");
                dogImage.src = imageUrl;
                dogImage.classList.add("main--dog-image");
                mainWrap.appendChild(dogImage);
                hideLoader()
                footerPosition()
            });
        })
        .catch((error) => {
            hideLoader()
            footerPosition()
            console.log("ERROR: ", error);
        });
}

loadButton.addEventListener("click", fetchData);


