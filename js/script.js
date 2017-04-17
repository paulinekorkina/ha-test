var feedbackBtn = document.querySelector(".modal-label");
var feedbackPopup = document.querySelector(".modal-feedback");
var sendBtnList = document.querySelectorAll(".btn");
var confirmPopup = document.querySelector(".modal-confirmation");
var closeBtn = confirmPopup.querySelector(".confirm-close");
var overlay = document.querySelector(".modal-overlay");

feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.toggle("modal-feedback-open");
});

for (var i = 0; i < sendBtnList.length; ++i) {
  var sendBtn = sendBtnList[i];
  sendBtn.addEventListener("click", function(event) {
    event.preventDefault();
    confirmPopup.classList.add("modal-confirmation-open");
    overlay.classList.add("modal-overlay-open");
  });
}

closeBtn.addEventListener("click", function(event) {
  event.preventDefault();
  confirmPopup.classList.remove("modal-confirmation-open");
  overlay.classList.remove("modal-overlay-open");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (confirmPopup.classList.contains("modal-confirmation-open")) {
      confirmPopup.classList.remove("modal-confirmation-open");
      overlay.classList.remove("modal-overlay-open");
    }
  }
});

overlay.addEventListener("click", function(event) {
  confirmPopup.classList.remove("modal-confirmation-open");
  overlay.classList.remove("modal-overlay-open");
});

$(document).ready(function(){
  var $menu = $("#navigation");
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 100 && !$menu.hasClass("main-navigation-open") ) {
      $menu.addClass("main-navigation-open");
    } else if($(this).scrollTop() <= 100 && $menu.hasClass("main-navigation-open")) {
        $menu.removeClass("main-navigation-open");
      }
  });
});
