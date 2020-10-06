// write js code here
const buttons = document.querySelectorAll("[data-button]");
const image = document.querySelector("[data-image]");
const sitePermalink = document
  .querySelector("body")
  .getAttribute("data-permalink");

const facebookButton = document.querySelector("[data-facebook-link]");
const twitterButton = document.querySelector("[data-twitter-link]");
const downloadButton = document.querySelector("[data-download-link]");

const facebookStem = "https://www.facebook.com/sharer/sharer.php?u=";
const twitterStem = "https://twitter.com/home?status=";

buttons.forEach((button) => {
  const filename = button.getAttribute("data-filename");
  const url = `/gallery/${filename}.jpg`;

  button.addEventListener("click", function () {
    function waitForImageToLoad(imageElement) {
      return new Promise((resolve) => {
        imageElement.onload = resolve;
      });
    }

    image.classList.remove("opacity-100");
    image.classList.add("opacity-0");
    window.setTimeout(function () {
      image.setAttribute("src", url);
    }, 300);

    waitForImageToLoad(image).then(() => {
      window.setTimeout(function () {
        image.classList.add("opacity-100");
      }, 150);
    });

    const twitterLink = `${twitterStem}${sitePermalink}/reasons/${filename}`;
    const facebookLink = `${facebookStem}${sitePermalink}/reasons/${filename}`;

    downloadButton.setAttribute("href", url);
    twitterButton.setAttribute("href", twitterLink);
    facebookButton.setAttribute("href", facebookLink);
  });
});
