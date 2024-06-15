var index = 0;
var duongdan = "./image/img/";
var imgs = [
    "home1.jpg",
    "home2.jpg",
    "home3.webp",
    "home4.webp",
];

function nextImg() {
    if (index < imgs.length - 1) {
      index++;
    } else {
      index = 0;
    }
    document.getElementById("anh").src = duongdan + imgs[index];
  }
  function previousImg() {
    if (index < 0) {
      index--;
    } else {
      index = imgs.length - 1;
    }
    document.getElementById("anh").src = duongdan + imgs[index];
  }
  setInterval(nextImg, 2500);