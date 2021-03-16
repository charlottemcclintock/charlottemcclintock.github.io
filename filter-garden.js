var msnry = new Masonry(document.getElementById("specialgrid"), {
  //options
  itemSelector: ".grid-item",
  columnWidth: 270,
});

function filterSelection(c) {
  helper("all", msnry);
  helper(c, msnry);
}

function helper(c, msnry) {
  if (c != "all") {
    document.getElementById("buds").style.display = "none";
  } else {
    document.getElementById("buds").style.display = "block";
  }

  var x, i;
  x = document.getElementsByClassName("grid-item");
  if (c == "all") c = "";
  console.log("cleared");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

    if (x[i].className.includes(c)) {
      x[i].style.display = "block";
    }
  }
  msnry.layout();
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
