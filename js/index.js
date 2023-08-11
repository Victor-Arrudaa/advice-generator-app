const p = document.querySelector("p");
const h3 = document.querySelector(".text");
const btn = document.querySelector("button");

async function getAdvice(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

btn.addEventListener("click", postAdvice);

function postAdvice() {
    getAdvice("https://api.adviceslip.com/advice").then((res) => {
        p.innerHTML = `Advice # ${res.slip.id}`;
        h3.innerHTML = `${res.slip.advice}`;
    });
}
