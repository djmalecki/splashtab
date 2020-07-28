window.onload = onLoad;

var resInputX = document.getElementById('resX');
var resInputY = document.getElementById('resY');

// onchanged: verify value and call updatechecked
resInputX.onchange = function() {
  if (!isNaN(this.value)) {
    localStorage.removeItem("resPrefX");
    localStorage.setItem("resPrefX", this.value);
    document.getElementById("saveNotify").innerText = "Preferences saved";
  } else {
    document.getElementById("saveNotify").innerText = "Resolution should be a number";
  }
}

resInputY.onchange = function() {
  if (!isNaN(this.value)) {
    localStorage.removeItem("resPrefY");
    localStorage.setItem("resPrefY", this.value);
    document.getElementById("saveNotify").innerText = "Preferences saved";
  } else {
    document.getElementById("saveNotify").innerText = "Resolution should be a number";
  }
}

function onLoad() {
  // get custom resolution preferences from localStorage and fill input boxes

  //try to get localStorage item
  //if it doesnt exist: assume no config and continue
  try {
    var resPrefX = localStorage.getItem("resPrefX");
    var resPrefY = localStorage.getItem("resPrefY");

    resInputX.value = resPrefX;
    resInputY.value = resPrefY;
  }
  catch (err) {
    console.log(err);
  }
}