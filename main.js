if (document.querySelector("body.download")) {
  var selects = document.querySelectorAll(".js-select-download");

  var setDownload = function(element) {
    element = element || {};
    var target = element.dataset && element.dataset.target;
    var value = element.value;
    var selector = document.querySelector("[data-download=" + target + "]");

    if (selector) {
      selector.href = value;
      selector.download = value;
    }
  };

  if (selects && selects.length > 0) {
    selects.forEach(element => {
      setDownload(element);
      element.addEventListener("change", setDownload.bind(this, element));
    });
  }
}
