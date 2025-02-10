const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("click-btn");
const color_code = document.querySelector(".color");

function generate() {
    let code = "";
    while (code.length < 6) {
        let ranNum = Math.floor(Math.random() * hex.length);
        code += hex[ranNum];
    }
    return code;
}

function change() {
    let code = "#" + generate();
    console.log(code);
    document.querySelector('main').style.backgroundColor = code;
    color_code.textContent = code;
}

btn.addEventListener('click', change);