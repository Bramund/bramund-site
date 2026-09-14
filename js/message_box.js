const messageBox = document.getElementById("message_wrapper");
const messageBtn = document.getElementById("close_message");
const mediaQuery = window.matchMedia("(max-width: 1024px)");
const isNew = sessionStorage.getItem("visit") == null;

if (isNew) {
  sessionStorage.setItem("visit", ".");
} else {
  messageBox.style.display = "none";
}

function hidebox() {
  messageBox.classList.add("fadeOut");
  setTimeout(function () {
    messageBox.style.display = "none";
  }, 500);
}

messageBox.classList.remove("hidden");
setTimeout(function () {
  messageBox.classList.add("neutral");
}, 1000);

messageBtn.onclick = hidebox;
if (mediaQuery.matches) {
  setTimeout(function () {
    hidebox();
  }, 10000);
} else {
  setTimeout(function () {
    hidebox();
  }, 30000);
}
