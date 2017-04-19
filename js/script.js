$(document).ready(function() {
  var overlay = $("#overlay");
  var send = $(".btn");
  var close = $(".confirm-close, #overlay");
  var confirm = $("#modal-confirmation");
  var feedbackBtn = $(".modal-label");
  var feedbackPopup = $(".modal-feedback");
  var menu = $("#navigation");

    send.click( function(event){
      event.preventDefault();
      confirm.addClass("modal-confirmation-open");
      overlay.addClass("modal-overlay-open");
    });

    close.click( function(event){
      event.preventDefault();
      confirm.removeClass("modal-confirmation-open");
      overlay.removeClass("modal-overlay-open");
    });

    feedbackBtn.click(function(event){
      event.preventDefault();
      feedbackPopup.toggleClass("modal-feedback-open");
    });

    $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && !menu.hasClass("main-navigation-open") ) {
        menu.addClass("main-navigation-open");
      } else if($(this).scrollTop() <= 100 && menu.hasClass("main-navigation-open")) {
          menu.removeClass("main-navigation-open");
        }
    });

});
