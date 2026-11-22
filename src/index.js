import "./style.css";
import homePage from "./homepg";
import menuPage from "./menupg";
import aboutPage from "./aboutpg";
import buildPage from "./buildpg";
import matrixify from "./matrixify";
import arrayArranger from "./arrarr";
import cryptor from "./crypt";
import arrayDerranger from "./arrdearr";
import detrixify from "./detrixify";
import correx from "./correx";
const math = require('mathjs');

const keyCode = math.matrix([[9, 0], [4, 2]]);
const keyArr = keyCode.toJSON().data;
const keyInv = math.inv(keyCode);
const keyInvJSON = keyInv.toJSON();
const keyInvArr = keyInvJSON.data;

console.log(`The key is:`);
console.log(keyInvArr);

console.log("Index script running...");

  
let exampleCyph = ["-", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\'", "\"", " ", ".", ",", "!", "?", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let exampleStr = "Hi. My name is Tim.";

let ex1 = matrixify(exampleStr, exampleCyph);
console.log("matrixify:");
console.log(ex1);
let ex2 = arrayArranger(ex1, 2);
console.log("Array arranger:");
console.log(ex2);
let encMat = cryptor(ex2, keyArr);
console.log("cryptor:");
console.log(encMat);
console.log("toString:");
console.log(encMat.toString());

let decMat = cryptor(encMat, keyArr, true);
console.log(decMat);
let derrangedMat = arrayDerranger(decMat);
console.log(derrangedMat);
let detrixMat = detrixify(derrangedMat, exampleCyph);
console.log(detrixMat);


let decBtn = document.getElementById("decBtn");
let encBtn = document.getElementById("encBtn");
decBtn.addEventListener("click", () => {
  let texIn = document.getElementById("texIn");
  let keyIn = document.getElementById("keyIn");
  let keyInVal = keyIn.value;
  let keySize = Math.sqrt(keyInVal.length);
  console.log(keySize);
  let keyActual = matrixify(keyInVal, exampleCyph, "key");
  console.log(keyActual);
  let texInVal = texIn.value;
  let texInArr = texInVal.split(",").map(Number);
  let texOut = document.getElementById("texOut");
  let outputResult1 = arrayArranger(texInArr, keySize);
  console.log(outputResult1);
  let outputResult2 = cryptor(outputResult1, keyActual, true);
  console.log(outputResult2);
  let outputResult3 = arrayDerranger(outputResult2);
  console.log(outputResult3);
  let outputResult4 = correx(outputResult3);
  console.log("Correx result:");
  console.log(outputResult4);
  let outputResult5 = detrixify(outputResult4, exampleCyph);
  console.log(outputResult5);
  texOut.textContent = outputResult5;
});

encBtn.addEventListener("click", () => {
  let texIn = document.getElementById("texIn");
  let keyIn = document.getElementById("keyIn");
  let keyInVal = keyIn.value;
  let keySize = Math.sqrt(keyInVal.length);
  console.log(keySize);
  let keyActual = matrixify(keyInVal, exampleCyph, "key");
  console.log(keyActual);
  let texInVal = texIn.value;
  //let texInArr = texInVal.split(",").map(Number);
  let texOut = document.getElementById("texOut");
  let outputResult1 = matrixify(texInVal, exampleCyph);
  console.log(outputResult1);
  let outputResult2 = arrayArranger(outputResult1, keySize);
  console.log(outputResult2);
  let outputResult3 = cryptor(outputResult2, keyActual);
  console.log(outputResult3);
  let outputResult4 = arrayDerranger(outputResult3);
  console.log(outputResult4);
  texOut.textContent = outputResult3;
});

//buildPage();

/*homePage();

const homeBtn = document.getElementById("hbtn");
const menuBtn = document.getElementById("mbtn");
const aboutBtn = document.getElementById("abtn");

function tabSwitch () {
  let content = document.getElementById("content");
  content.innerHTML = "";
};

homeBtn.addEventListener("click", () => {
  tabSwitch();
  homePage();
});
menuBtn.addEventListener("click", () => {
  tabSwitch();
  menuPage();
});
aboutBtn.addEventListener("click", () => {
  tabSwitch();
  aboutPage();
});*/