document.querySelectorAll(".faq").forEach((faq) => {
  let btn = faq.querySelector(".expand-btn");
  let answer = faq.querySelector(".answer");
  let content = faq.querySelector(".faq-content");

  content.addEventListener("click", function () {
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingTop = "0px";
    } else {
      answer.style.maxHeight = "100px";
      answer.style.paddingTop = "16px";
    }

    // Rotate the button icon
    btn.classList.toggle("rotated");
  });
  btn.addEventListener("click", function () {
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingTop = "0px";
    } else {
      answer.style.maxHeight = "100px";
      answer.style.paddingTop = "16px";
    }

    // Rotate the button icon
    btn.classList.toggle("rotated");
  });
});
