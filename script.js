const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");

let indexAtual = 1;

next.addEventListener("click", () => {
  indexAtual++;
  if (indexAtual > circles.length) {
    indexAtual = circles.length;
  }
  atualizar();
});

prev.addEventListener("click", () => {
  indexAtual--;
  if (indexAtual < 1) {
    indexAtual = 1;
  }
  atualizar();
});

function atualizar() {
  circles.forEach((circle, index) => {
    if (index < indexAtual) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (indexAtual === 1) {
    prev.disabled = true;
  } else if (indexAtual === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
