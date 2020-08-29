let LAST_PAGE_NUM;
let pageNum = 1;

window.addEventListener("DOMContentLoaded", () => {
  resizeThrottler();
  LAST_PAGE_NUM = document.querySelectorAll(".page").length;
  addArrowListeners();
});

window.addEventListener("resize", resizeThrottler, false);

var resizeTimeout;
function resizeThrottler() {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      setViewportHeight();
    }, 66);
  }
}

function setViewportHeight() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
}

function addArrowListeners() {
  const arrowEls = document.querySelectorAll(".arrow");
  arrowEls.forEach((arrowEl) => {
    arrowEl.addEventListener("click", ({ currentTarget }) => {
      if (currentTarget.classList.contains("disable")) {
        return;
      }
      pageNum += currentTarget.id === "left" ? -1 : 1;
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
    if (Number(pageEl.id.slice(pageEl.id.indexOf("-") + 1)) === pageNum) {
      pageEl.classList.add("active");
    } else {
      pageEl.classList.remove("active");
    }
  });
}
