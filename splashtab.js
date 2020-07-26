window.onload = onLoad;

function onLoad() {
  var URL = buildURL();

  document.body.style.background = 'url(' + URL + ') no-repeat center center fixed';
}


function buildURL() {
  var resX = window.screen.width * window.devicePixelRatio;
  var resY = window.screen.height * window.devicePixelRatio;

  //attempt to get preferred resolution from localStorage
  try {
    var resPrefX = localStorage.getItem("resPrefX");
    var resPrefY = localStorage.getItem("resPrefY");
  } catch(error) {
    console.log(error)
  }

  if (!!resPrefX && !!resPrefY) {
    resX = resPrefX;
    resY = resPrefY;
  } else {
    localStorage.setItem("resPrefX", resX);
    localStorage.setItem("resPrefY", resY);
  }

  console.log("SPLASHTAB: splashtab.js: Using resolution " + resX + "x" + resY);

  return "https://source.unsplash.com/random/" + resX + "x" + resY;
}