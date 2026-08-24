document.addEventListener("DOMContentLoaded", function () {
  // Bind modal triggers (1 through 4)
  for (var i = 1; i <= 4; i++) {
    (function (index) {
      var modal = document.getElementById("myModal" + index);
      var btn = document.getElementById("chooseBtn" + index);
      var whatsappBtn = document.getElementById("whatsappBtn" + index);
      var contactBtn = document.getElementById("contactFormBtn" + index);

      if (btn && modal) {
        btn.addEventListener("click", function () {
          modal.style.display = "block";
        });
      }

      if (modal) {
        var closeBtn = modal.getElementsByClassName("close")[0];
        if (closeBtn) {
          closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
          });
        }
      }

      if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function () {
          window.location.href = "https://wa.me/message/KHOOPBPCS4M7G1";
        });
      }

      if (contactBtn) {
        contactBtn.addEventListener("click", function () {
          window.location.href = "contact.html";
        });
      }
    })(i);
  }

  // Close modal when clicking outside modal-content
  window.addEventListener("click", function (event) {
    for (var i = 1; i <= 4; i++) {
      var modal = document.getElementById("myModal" + i);
      if (modal && event.target === modal) {
        modal.style.display = "none";
      }
    }
  });
});
