window.onload = onLoad;

function onLoad() {
  console.log("page loaded");
  var randURL = getImage();
  document.body.style.background = 'url(' + randURL + ') no-repeat center center fixed';
}


function getImage() {
  //get user prefs res' from localStorage
  var resString = localStorage.getItem("resPref");
  console.log("resString " + resString);

  //split string into array
  var resArray = resString.split("/");
  console.log("resArray " + resArray);

  //get length of array
  var numberOfRes = resArray.length - 1;
  console.log("numberOfRes " + numberOfRes);

  if (numberOfRes < 1) {
    console.log("no res chosen, return default");
    return "https://source.unsplash.com/random/1920x1080";
  }

  //chose random number based on array length
  var randIndex = randomNumber(numberOfRes);
  console.log("randIndex " + randIndex);

  //use random number as index to select resolution and return address string
  var selectRes = resArray[randIndex];
  console.log("selectRes " + selectRes);

  console.log("https://source.unsplash.com/random/" + selectRes);
  return "https://source.unsplash.com/random/" + selectRes;

}

function randomNumber(numberOfRes) {
  return Math.floor(Math.random() * (numberOfRes));
}
