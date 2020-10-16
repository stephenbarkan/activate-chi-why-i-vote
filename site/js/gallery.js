// write js code here
const body = document.querySelector("body");
const buttons = document.querySelectorAll("[data-button]");
const badges = document.querySelectorAll("[data-badge]");
const image = document.querySelector("[data-image]");
const imageLoader = document.querySelector("[data-image-loader]");
const sitePermalink = body.getAttribute("data-permalink");

const facebookButton = document.querySelector("[data-facebook-link]");
const twitterButton = document.querySelector("[data-twitter-link]");
const downloadButton = document.querySelector("[data-download-link]");
const allAboveButton = document.querySelector("[data-all-above-link]");

let copyButton;
let copyInput;
let copyConfirmation;
let copiedTimeout;

const facebookStem = "https://www.facebook.com/sharer/sharer.php?u=";
const twitterStem =
  "https://twitter.com/intent/tweet?text=Who's Next? We get to decide. This is why I'm voting.&url=";
const twitterCaboose = "&hashtags=activatechi,vote2020,whyivote";

buttons.forEach((button) => {
  const filename = button.getAttribute("data-filename");
  const url = `/gallery/ig/${filename}.jpg`;

  button.addEventListener("click", function () {
    badges.forEach((badge) => {
      badge.style.display = null;
    });
    const badge = button.querySelector("[data-badge]");
    badge.style.display = "block";

    function waitForImageToLoad(imageElement) {
      return new Promise((resolve) => {
        imageElement.onload = resolve;
      });
    }

    const loadingTimeout = window.setTimeout(function () {
      imageLoader.setAttribute("x-data", "{isLoading: true}");
    }, 750);

    image.classList.remove("opacity-100");
    image.classList.add("opacity-0");

    const initTimeout = window.setTimeout(function () {
      image.setAttribute("src", url);
    }, 300);

    waitForImageToLoad(image).then(() => {
      window.clearTimeout(loadingTimeout);
      window.setTimeout(function () {
        imageLoader.setAttribute("x-data", "{isLoading: false}");
        image.classList.add("opacity-100");
      }, 150);
    });

    const twitterLink = `${twitterStem}${sitePermalink}/reason/${filename}/${twitterCaboose}`;
    const facebookLink = `${facebookStem}${sitePermalink}/reason/${filename}/`;

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

const resetCopied = function () {
  copyConfirmation.classList.add("opacity-0");
  copyConfirmation.classList.add("duration-500");
  copyConfirmation.addEventListener("transitionend", () => {
    copyConfirmation.classList.add("hidden");
    copyConfirmation.classList.remove("opacity-0");
  });
};

// const modalOpen = document.querySelectorAll(`[data-modal-open]`);
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
