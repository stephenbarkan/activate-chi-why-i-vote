// write js code here
var buttons = document.querySelectorAll("[data-button]");
var badges = document.querySelectorAll("[data-badge]");
var image = document.querySelector("[data-image]");
var sitePermalink = document.querySelector("body").getAttribute("data-permalink");
var facebookButton = document.querySelector("[data-facebook-link]");
var twitterButton = document.querySelector("[data-twitter-link]");
var downloadButton = document.querySelector("[data-download-link]");
var facebookStem = "https://www.facebook.com/sharer/sharer.php?u=";
var twitterStem = "https://twitter.com/home?status=";
buttons.forEach(function (button) {
  var filename = button.getAttribute("data-filename");
  var url = "/gallery/".concat(filename, ".jpg");
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

    image.classList.remove("opacity-100");
    image.classList.add("opacity-0");
    window.setTimeout(function () {
      image.setAttribute("src", url);
    }, 300);
    waitForImageToLoad(image).then(function () {
      window.setTimeout(function () {
        image.classList.add("opacity-100");
      }, 150);
    });
    var twitterLink = "".concat(twitterStem).concat(sitePermalink, "/reasons/").concat(filename);
    var facebookLink = "".concat(facebookStem).concat(sitePermalink, "/reasons/").concat(filename);
    downloadButton.setAttribute("href", url);
    twitterButton.setAttribute("href", twitterLink);
    facebookButton.setAttribute("href", facebookLink);
  });
});