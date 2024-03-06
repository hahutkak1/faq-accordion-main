img_array1 = new Array(
    "assets/images/icon-minus.svg",
    "assets/images/icon-plus.svg"
  );
  i = 0;

function btn1() {
  var x = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  i++;
  document.getElementById("myImg1").src = img_array1[i];
  if (i == img_array1.length - 1) {
    i = -1;
  }
}

img_array2 = new Array(
    "assets/images/icon-minus.svg",
    "assets/images/icon-plus.svg"
  );
  ii = 0;

function btn2() {
  var x = document.getElementById("content2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  ii++;
  document.getElementById("myImg2").src = img_array2[ii];
  if (ii == img_array2.length - 1) {
    ii = -1;
  }
}

img_array3 = new Array(
    "assets/images/icon-minus.svg",
    "assets/images/icon-plus.svg"
  );
  iii = 0;

function btn3() {
  var x = document.getElementById("content3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  iii++;
  document.getElementById("myImg3").src = img_array3[iii];
  if (iii == img_array3.length - 1) {
    iii = -1;
  }
}

img_array4 = new Array(
    "assets/images/icon-minus.svg",
    "assets/images/icon-plus.svg"
  );
  iiii = 0;

function btn4() {
  var x = document.getElementById("content4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  iiii++;
  document.getElementById("myImg4").src = img_array4[iiii];
  if (iiii == img_array4.length - 1) {
    iiii = -1;
  }
}

