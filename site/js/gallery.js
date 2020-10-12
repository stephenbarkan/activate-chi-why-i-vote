// write js code here
const buttons = document.querySelectorAll("[data-button]");
const badges = document.querySelectorAll("[data-badge]");
const image = document.querySelector("[data-image]");
const imageLoader = document.querySelector("[data-image-loader]");
const sitePermalink = document
  .querySelector("body")
  .getAttribute("data-permalink");

const facebookButton = document.querySelector("[data-facebook-link]");
const twitterButton = document.querySelector("[data-twitter-link]");
const downloadButton = document.querySelector("[data-download-link]");

const facebookStem = "https://www.facebook.com/sharer/sharer.php?u=";
const twitterStem =
  "https://twitter.com/intent/tweet?text=Who's Next? We get to decide. This is why I'm voting.&url=";
const twitterCaboose = "&hashtags=activatechi,vote2020,whyivote";

buttons.forEach((button) => {
  const filename = button.getAttribute("data-filename");
  const url = `/gallery/${filename}.jpg`;

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

    const twitterLink = `${twitterStem}${sitePermalink}/reason/${filename}${twitterCaboose}`;
    const facebookLink = `${facebookStem}${sitePermalink}/reason/${filename}`;

    downloadButton.setAttribute("href", url);
    twitterButton.setAttribute("href", twitterLink);
    facebookButton.setAttribute("href", facebookLink);
  });
});
