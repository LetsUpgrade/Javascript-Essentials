// alert("Hello");

// let name = prompt("enter name");
// console.log(name);

// let answer = confirm("do u want to go to google");
// if (answer == false) {
//   console.log("okay stay here");
// } else {
//   location = "https://www.google.co.in";
// }

// fetching elements
// manipulate the text
// manipulate the html
// work with attributes
// work with inputs
//manipulate css

// show password
//popups

// by tagname

// const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs[1]);

// by class name

// const para = document.getElementsByClassName("english");
// console.log(para[0]);

// by id

// const para = document.getElementById("spanish");
// console.log(para);

// by quering

// const para = document.querySelector("h1");
// console.log(para);

// const para = document.querySelectorAll("#spanish");
// console.log(para);

// working with text

function doSomething() {
  const para = document.getElementById("data");
  para.innerHTML = "<h1>I am js developer</h1>";
}

function changeImage() {
  const ele = document.getElementById("image");
  console.log(ele.id);
  const newUrl =
    "https://s3.r29static.com/bin/entry/ce2/x,80/2169674/image.jpg";

  ele.src = newUrl;
}

function printValue() {
  const eles = document.getElementsByClassName("name");
  console.log(eles[0].value);
}
