// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const increment = target / 300; // Adjust speed here

  function updateCounter() {
    count += increment;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target + '+';
    }
  }

  updateCounter();
});

// Modal Functionality
const modal = document.getElementById("pdfModal");
const pdfFrame = document.getElementById("pdfFrame");
const overviewContent = document.getElementById("overviewContent");
const closeBtn = document.querySelector(".modal .close");

document.querySelectorAll(".open-pdf").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const pdfUrl = this.dataset.pdf;

    modal.style.display = "block";

    if (pdfUrl === "overview") {
      pdfFrame.style.display = "none";
      overviewContent.style.display = "block";
    } else {
      overviewContent.style.display = "none";
      pdfFrame.src = pdfUrl;
      pdfFrame.style.display = "block";
    }
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
  pdfFrame.src = "";
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    pdfFrame.src = "";
  }
};
