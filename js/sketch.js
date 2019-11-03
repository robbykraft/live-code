document.addEventListener("DOMContentLoaded", function () {
  var app = LiveCode(document.querySelector("#app"));

  app.didPause = function (paused) { };
  app.didUpdate = function () { };
  app.reset = function () { };

  window.app = app;
});
