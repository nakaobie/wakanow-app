//Variables

const carousel = document.querySelector(".gallery");
const firstCardWidth = document.querySelector(".gallery").offsetWidth;
const arrowBtns = document.querySelectorAll(".caret");

let oneCardWidth = firstCardWidth / 3;

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -oneCardWidth : oneCardWidth;
  });
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
