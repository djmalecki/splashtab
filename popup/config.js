window.onload = onLoad;

var resInput = document.getElementsByTagName('input');

function onLoad() {
  console.log("popup loaded");
  //get user res' from localStorage and check relevent boxes

  //try to get localStorage item
  //if it doesnt exist: assume no config and continue
  try {
    console.log("try block reached");

    var resString = localStorage.getItem("resPref");
    console.log("retrieved local storage " + resString);

    var resArray = resString.split("/");

    for (i = 0; i < resArray.length; i++) {
      for (n = 0; n < resInput.length; n++) {
        console.log("checking " + resInput[n].name + " against " + resArray[i]);
        if (resInput[n].name == resArray[i]) {
          resInput[n].checked = true;
          console.log(resInput[n].name + " checked");
        }
      }
    }
  }
  catch (err) {
    console.log(err);
  }

}

for (i = 0; i < resInput.length; i++) {
  resInput[i].onchange = function() { updateChecked(); };
}

function updateChecked() {
  console.log("updateChecked triggered");
  //on trigger, take name of all checked boxes (of tag name 'input'), and push to local storage
  var resChecked = "";

  for (i = 0; i < resInput.length; i++) {
    if (resInput[i].checked === true) {
      //Add each checkbox name to array and trigger 'save' function
      resChecked += resInput[i].name + "/";
    }
  }

  save(resChecked);
  console.log(resChecked);
}

//'save' function converts checkbox name array to string and pushes string data to local storage
function save(resString) {
  localStorage.removeItem("resPref");
  console.log("local storage cleared");

  localStorage.setItem("resPref", resString);
  console.log("resPref localStorage set " + resString);
}
