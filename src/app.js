/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = () => {
  //write your code here
  let randomNumber = Math.floor(Math.random() * 200);
  let excuseButton = document.getElementById("button");
  newExcuse();

  excuseButton.addEventListener("click", newExcuse);
};

let generateExcuse = () => {
  //declare sentence piece arrays
  let pronoun = ["A", "The", "My"];
  let subject = ["dog", "cat", "car", "plane", "porcupine", "bear"];
  let verb = ["ate", "blew up", "ran over", "broke", "ruined", "flew into"];
  let possession = [
    "my laptop",
    "my homework",
    "my house",
    "my dinner",
    "my couch",
    "my playstation"
  ];

  //declare string variable
  let generatedExcuse = "";

  //use Math.random to generate a number for each array
  let randomPronoun = Math.floor(Math.random() * pronoun.length);
  let randomSubject = Math.floor(Math.random() * subject.length);
  let randomVerb = Math.floor(Math.random() * verb.length);
  let randomPossession = Math.floor(Math.random() * possession.length);

  generatedExcuse = `${pronoun[randomPronoun]} ${subject[randomSubject]} ${verb[randomVerb]} ${possession[randomPossession]}.`;

  return generatedExcuse;
};

let newExcuse = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
