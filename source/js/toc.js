$(document).ready(function() {
    var headingCount = $("h2,h3,h4,h5").length;
    if (headingCount > 1) {
      $("#toc").tocify({
        selectors: "h2,h3,h4,h5"
      });
    }
  });