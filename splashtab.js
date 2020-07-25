window.onload = onLoad;

function onLoad() {
  var resolution = window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio;

  //var URL = getImage();
  var URL = "https://source.unsplash.com/random/" + resolution;
  document.body.style.background = 'url(' + URL + ') no-repeat center center fixed';
}


function getImage() {
  //get user prefs res' from localStorage
  var resString = localStorage.getItem("resPref");

  //split string into array
  var resArray = resString.split("/");

  //get length of array
  var numberOfRes = resArray.length - 1;

  if (numberOfRes < 1) {
    return "https://source.unsplash.com/random/1920x1080";
  }

  //chose random number based on array length
  var randIndex = randomNumber(numberOfRes);

  //use random number as index to select resolution and return address string
  var selectRes = resArray[randIndex];

  return "https://source.unsplash.com/random/" + selectRes;

}

function randomNumber(numberOfRes) {
  return Math.floor(Math.random() * (numberOfRes));
}
