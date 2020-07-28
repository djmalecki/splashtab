window.onload = onLoad;

function onLoad() {
  var URL = buildURL();
  var tags = buildTags();

  function successCallback(result) {
    // image fade in
    document.getElementById("blackCover").className += "hideElement";
  }

  function failureCallback(error) {
    console.error("Error fetching image: " + error);
  }

  loadImageAsync(URL).then(successCallback, failureCallback);
}

async function loadImageAsync(URL) {
  var imgRequest = new Request(URL);
  fetch(imgRequest).then(function (response) {
    console.log(response.url)
    document.body.style.background = 'url(' + response.url + ') no-repeat center center fixed';
    document.body.onclick = function () { window.open(response.url, '_blank') };
  });
}

function buildURL() {
  var resX = window.screen.width * window.devicePixelRatio;
  var resY = window.screen.height * window.devicePixelRatio;

  //attempt to get preferred resolution from localStorage
  try {
    var resPrefX = localStorage.getItem("resPrefX");
    var resPrefY = localStorage.getItem("resPrefY");
  } catch (error) {
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

function buildTags() {
  try {
    var tags = localStorage.getItem("tags");
  } catch (error) {
    console.log(error)
  }
}