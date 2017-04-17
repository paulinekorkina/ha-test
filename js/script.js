var feedbackBtn = document.querySelector(".modal-label");
var feedbackPopup = document.querySelector(".modal-feedback");

feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.toggle("modal-feedback-open");
});
