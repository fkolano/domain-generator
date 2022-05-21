/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function domainGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < noun.length; j++) {
        for (let p = 0; p < adj.length; p++) {
          console.log(`${pronoun[i]}${noun[j]}${adj[p]}.com`);
        }
      }
    }
  }
  domainGenerator();
  document.querySelector("#domain-generator").innerHTML = domainGenerator();
};
