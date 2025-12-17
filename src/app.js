import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = [
     'your', 'our', 'the', 'she', 'it', 'this'
  ]
  let adjective = ['great', 'big', 'massive', 'magnificent', 'lazy', 'lucky', 'cool', 'angry', 'favorite', 'horrible']
  let noun = ['duck', 'cat', 'dog', 'grandma', 'circles', 'pc', 'tech', 'racoon', 'lion', 'tiger']
  let topLevelDomain = ['.us', '.com', '.io','.edu','.ms']

  for(let i of pronoun) {
    for(let j of adjective) {
      for(let k of noun) {
        for(let l of topLevelDomain){
        let randomPronoun = Math.floor(Math.random() * pronoun.length) 
        let randomAdjective = Math.floor(Math.random() * adjective.length) 
        let randomNoun = Math.floor(Math.random() * noun.length) 
        let randomTopLevelDomain = Math.floor(Math.random() * topLevelDomain.length)
       
       
        document.getElementById('domain').innerHTML = `${pronoun[randomPronoun]}${adjective[randomAdjective]}${noun[randomNoun]}${topLevelDomain[randomTopLevelDomain]}`
        }
      }
    }
  }

};
