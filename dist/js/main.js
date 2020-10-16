// write js code here
var body = document.querySelector("body");
var buttons = document.querySelectorAll("[data-button]");
var badges = document.querySelectorAll("[data-badge]");
var image = document.querySelector("[data-image]");
var imageLoader = document.querySelector("[data-image-loader]");
var sitePermalink = body.getAttribute("data-permalink");
var facebookButton = document.querySelector("[data-facebook-link]");
var twitterButton = document.querySelector("[data-twitter-link]");
var downloadButton = document.querySelector("[data-download-link]");
var allAboveButton = document.querySelector("[data-all-above-link]");
var copyButton;
var copyInput;
var copyConfirmation;
var copiedTimeout;
var facebookStem = "https://www.facebook.com/sharer/sharer.php?u=";
var twitterStem = "https://twitter.com/intent/tweet?text=Who's Next? We get to decide. This is why I'm voting.&url=";
var twitterCaboose = "&hashtags=activatechi,vote2020,whyivote";
buttons.forEach(function (button) {
  var filename = button.getAttribute("data-filename");
  var url = "/gallery/ig/".concat(filename, ".jpg");
  button.addEventListener("click", function () {
    badges.forEach(function (badge) {
      badge.style.display = null;
    });
    var badge = button.querySelector("[data-badge]");
    badge.style.display = "block";

    function waitForImageToLoad(imageElement) {
      return new Promise(function (resolve) {
        imageElement.onload = resolve;
      });
    }

    var loadingTimeout = window.setTimeout(function () {
      imageLoader.setAttribute("x-data", "{isLoading: true}");
    }, 750);
    image.classList.remove("opacity-100");
    image.classList.add("opacity-0");
    var initTimeout = window.setTimeout(function () {
      image.setAttribute("src", url);
    }, 300);
    waitForImageToLoad(image).then(function () {
      window.clearTimeout(loadingTimeout);
      window.setTimeout(function () {
        imageLoader.setAttribute("x-data", "{isLoading: false}");
        image.classList.add("opacity-100");
      }, 150);
    });
    var twitterLink = "".concat(twitterStem).concat(sitePermalink, "/reason/").concat(filename, "/").concat(twitterCaboose);
    var facebookLink = "".concat(facebookStem).concat(sitePermalink, "/reason/").concat(filename, "/");
    downloadButton.setAttribute("href", url);
    twitterButton.setAttribute("href", twitterLink);
    facebookButton.setAttribute("href", facebookLink);
  });
});
allAboveButton.addEventListener("click", function () {
  window.setTimeout(function () {
    copyButton = document.querySelector("[data-copy-link]");
    copyInput = document.querySelector("[data-link-input]");
    copyConfirmation = document.querySelector("[data-copy-confirmation]");
    copyButton.addEventListener("click", function (e) {
      e.preventDefault();
      copyInput.select();
      copyInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      window.clearTimeout(copiedTimeout);
      copyConfirmation.classList.remove("opacity-0");
      copyConfirmation.classList.remove("hidden");
      copiedTimeout = window.setTimeout(resetCopied, 2000);
    });
  }, 150);
});

var resetCopied = function resetCopied() {
  copyConfirmation.classList.add("opacity-0");
  copyConfirmation.classList.add("duration-500");
  copyConfirmation.addEventListener("transitionend", function () {
    copyConfirmation.classList.add("hidden");
    copyConfirmation.classList.remove("opacity-0");
  });
}; // const modalOpen = document.querySelectorAll(`[data-modal-open]`);
// let modalClose;
// modalOpen.forEach((button) => {
//   button.addEventListener("click", () => {
//     body.classList.add("h-screen", "overflow-hidden");
//     window.setTimeout(function () {
//       modalClose = document.querySelectorAll(`[data-modal-close]`);
//       if (modalClose) {
//         modalClose.forEach((button) => {
//           button.addEventListener("click", () => {
//             console.log("hello");
//             body.classList.remove("h-screen", "overflow-hidden");
//           });
//         });
//       }
//     }, 150);
//   });
// });