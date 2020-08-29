const LAST_PAGE_NUM = 4;
let pageNum = 1;

window.addEventListener("DOMContentLoaded", () => {
  addArrowListeners();
});

function addArrowListeners() {
  const arrowEls = document.querySelectorAll(".arrow");
  arrowEls.forEach((arrowEl) => {
    arrowEl.addEventListener("click", ({ target }) => {
      if (target.classList.contains("disable")) {
        return;
      }
      pageNum += target.id === "left" ? -1 : 1;
      toggleArrowEnabling(arrowEls);
      togglePageView();
    });
  });
}

function toggleArrowEnabling(arrowEls) {
  arrowEls.forEach((el) => {
    if (pageNum === 1 && el.id === "left") {
      el.classList.add("disable");
    } else if (pageNum === LAST_PAGE_NUM && el.id === "right") {
      el.classList.add("disable");
    } else {
      el.classList.remove("disable");
    }
  });
}

function togglePageView() {
  document.querySelectorAll(".page").forEach((pageEl) => {
    if (Number(pageEl.id[pageEl.id.length - 1]) === pageNum) {
      pageEl.classList.add("active");
    } else {
      pageEl.classList.remove("active");
    }
  });
}
