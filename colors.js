const colors_arr = [
    "rgba(255, 69, 0, 1)",  // Red-Orange (#FF4500)
    "rgba(60, 179, 113, 1)", // Medium Sea Green (#3CB371)
    "rgba(123, 104, 238, 1)", // Medium Slate Blue (#7B68EE)
    "rgba(72, 61, 139, 1)",  // Dark Slate Blue (#483D8B)
    "rgba(255, 20, 147, 1)", // Deep Pink (#FF1493)
    "rgba(0, 191, 255, 1)",  // Deep Sky Blue (#00BFFF)
    "rgba(255, 140, 0, 1)",  // Dark Orange (#FF8C00)
    "rgba(138, 43, 226, 1)", // Blue Violet (#8A2BE2)
    "rgba(0, 206, 209, 1)",  // Dark Turquoise (#00CED1)
    "rgba(250, 128, 114, 1)", // Salmon (#FA8072)
    "rgba(0, 255, 127, 1)",  // Spring Green (#00FF7F)
    "rgba(220, 20, 60, 1)",  // Crimson (#DC143C)
    "rgba(199, 21, 133, 1)", // Medium Violet Red (#C71585)
    "rgba(147, 112, 219, 1)", // Medium Purple (#9370DB)
    "rgba(218, 112, 214, 1)", // Orchid (#DA70D6)
    "rgba(70, 130, 180, 1)", // Steel Blue (#4682B4)
    "rgba(144, 238, 144, 1)", // Light Green (#90EE90)
    "rgba(0, 250, 154, 1)",  // Medium Spring Green (#00FA9A)
    "rgba(255, 69, 0, 1)",   // Orange Red (#FF4500)
    "rgba(165, 42, 42, 1)",  // Brown (#A52A2A)
    "rgba(189, 183, 107, 1)", // Dark Khaki (#BDB76B)
    "rgba(102, 205, 170, 1)", // Medium Aquamarine (#66CDAA)
    "rgba(255, 228, 181, 1)", // Moccasin (#FFE4B5)
    "rgba(255, 222, 173, 1)", // Navajo White (#FFDEAD)
    "rgba(173, 255, 47, 1)"   // Green Yellow (#ADFF2F)
];


function change() {
    let x = Math.random();
    x *= 25;
    x = Math.floor(x);
    document.querySelector('main').style.backgroundColor = colors_arr[x];
    color_code.textContent = colors_arr[x];
};

const btn = document.getElementById("click-btn");
const color_code = document.querySelector(".color");

btn.addEventListener("click", change);