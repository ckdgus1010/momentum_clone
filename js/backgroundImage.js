const bgImgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
];

function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const rnd = getRandomNumber(0, bgImgs.length);
const src = `./img/${bgImgs[rnd]}`;

document.body.style.backgroundImage = `url(${src})`;