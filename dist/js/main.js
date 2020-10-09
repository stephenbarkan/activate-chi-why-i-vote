// write js code here
var buttons = document.querySelectorAll("[data-button]");
var badges = document.querySelectorAll("[data-badge]");
var image = document.querySelector("[data-image]");
var imageLoader = document.querySelector("[data-image-loader]");
var sitePermalink = document.querySelector("body").getAttribute("data-permalink");
var facebookButton = document.querySelector("[data-facebook-link]");
var twitterButton = document.querySelector("[data-twitter-link]");
var downloadButton = document.querySelector("[data-download-link]");
var facebookStem = "https://www.facebook.com/sharer/sharer.php?u=";
var twitterStem = "https://twitter.com/intent/tweet?text=Who's Next? We get to decide. This is why I'm voting.&url=";
var twitterCaboose = "&hashtags=activatechi,vote2020,whyivote";
buttons.forEach(function (button) {
  var filename = button.getAttribute("data-filename");
  var url = "/gallery/".concat(filename, ".jpg");
  button.addEventListener("click", function () {
    button.scrollIntoView({
      behavior: "smooth"
    });
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
    var twitterLink = "".concat(twitterStem).concat(sitePermalink, "/reason/").concat(filename).concat(twitterCaboose);
    var facebookLink = "".concat(facebookStem).concat(sitePermalink, "/reason/").concat(filename);
    downloadButton.setAttribute("href", url);
    twitterButton.setAttribute("href", twitterLink);
    facebookButton.setAttribute("href", facebookLink);
  });
});