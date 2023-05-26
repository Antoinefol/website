const wrapper = document.getElementById("tiles");
const colors = [
  "#ddfff7",
  "#f8c7cc",
  "#6b818c",
  "#cc2936",
  "#08415c",
  "#ffca3a",
];
let count = -1;

const handleOnClick = (index) => {
  count = (count + 1) % colors.length;
  anime({
    targets: ".tile",
    backgroundColor: colors[count],
    delay: anime.stagger(50, {
      grid: [
        Math.floor(document.body.clientWidth / 50),
        Math.floor(document.body.clientHeight / 50),
      ],
      from: index,
    }),
  });
};

const createTile = (index) => {
  const click = document.getElementById("click");
  click.onclick = (e) => handleOnClick(Math.floor(Math.random() * (index + 1)));
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).forEach((_, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  let columns = Math.floor(document.body.clientWidth / 50);
  let rows = Math.floor(document.body.clientHeight / 50);

  wrapper.innerHTML = "";
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

createGrid();
window.onresize = createGrid;

/* the effect on the click button*/

const enhance = (id) => {
  const element = document.getElementById(id);
  const text = element.innerText.split("");

  element.innerHTML = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";

    const inner = document.createElement("span");
    inner.className = "inner";
    inner.style.animationDelay = `${Math.floor(Math.random() * -5000)}ms`;

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);
    outer.appendChild(inner);
    element.appendChild(outer);
    const handleClick = (element) => {
      if (element.classList.contains("rotate")) {
        element.classList.remove("rotate");
      } else {
        element.classList.add("rotate");
      }
    };
    letter.onclick = () => handleClick(letter);
  });
};

enhance("click");

enhance("click");
