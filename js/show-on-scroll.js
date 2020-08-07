const scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

// Detect request animation frame
$(function () {
  //  run the animation once on load
  for (let i = 0; i < 2; i++) {
    scroll(loop);
  }
  // run the animation without an infinate loop
  window.addEventListener("scroll", loop);
});

const loop = () => {
  var elementsToShow = document.querySelectorAll(".show-on-scroll");

  if (window.innerHeight + window.pageYOffset <= document.body.offsetHeight) {
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });
  }
  //   to run as an infinite loop remove scroll event and uncomment next line
  // scroll(loop);
};

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
