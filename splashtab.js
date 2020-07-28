window.onload = onLoad;

function onLoad() {
  var URL = buildURL();

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
  console.log("SPLASHTAB: splashtab.js: Making request with URL: " + URL);
  var imgRequest = new Request(URL);
  fetch(imgRequest).then(function (response) {
    console.log("SPLASHTAB: splashtab.js: Received image: " + response.url);
    document.getElementById("imgContainer").src = response.url;
    document.body.onclick = function () { window.open(response.url, '_blank'); };
    document.body.style.cursor = "pointer";
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
    console.log(error);
  }

  if (!!resPrefX && !!resPrefY) {
    resX = resPrefX;
    resY = resPrefY;
  } else {
    localStorage.setItem("resPrefX", resX);
    localStorage.setItem("resPrefY", resY);
  }

  var tags = fetchTags();

  console.log("SPLASHTAB: splashtab.js: Using resolution " + resX + "x" + resY);
  console.log("SPLASHTAB: splashtab.js: Using tags " + tags);

  return "https://source.unsplash.com/featured/" + resX + "x" + resY + "/?" + tags;
}

function fetchTags() {
  var tags = "";

  try {
    var tags = localStorage.getItem("tags");
  } catch (error) {
    console.log(error);
  }

  tags = tags.toString().toLowerCase().replace(/\s/g, '');

  return tags;
}