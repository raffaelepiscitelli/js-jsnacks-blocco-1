const wrapperElement = document.querySelector("ul.list");
console.log(wrapperElement);

for (let i = 1; i <= 6; i++) {
    wrapperElement.innerHTML += `<p> ${i} <p/>`;
}