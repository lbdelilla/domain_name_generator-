/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const domainNameGenerator = () => {
  const pronouns = [
    "i",
    "you",
    "he",
    "she",
    "it",
    "we",
    "they",
    "me",
    "him",
    "her",
    "us",
    "them",
    "myself",
    "yourself",
    "himself",
    "herself",
    "itself",
    "ourselves",
    "themselves",
    "our",
    "the"
  ];
  const adjectives = [
    "happy",
    "sad",
    "beautiful",
    "ugly",
    "smart",
    "dumb",
    "tall",
    "short",
    "big",
    "small",
    "kind",
    "cruel",
    "funny",
    "serious",
    "brave",
    "cowardly",
    "bright",
    "dark",
    "noisy",
    "quiet",
    "strong",
    "weak",
    "fast",
    "slow",
    "delicious",
    "disgusting"
  ];
  const nouns = [
    "cat",
    "dog",
    "house",
    "car",
    "book",
    "tree",
    "flower",
    "computer",
    "chair",
    "table",
    "pen",
    "sun",
    "moon",
    "river",
    "mountain",
    "city",
    "bird",
    "friend",
    "family",
    "job",
    "food",
    "music",
    "art",
    "time",
    "love"
  ];
  const extensions = [
    ".com",
    ".net",
    ".dev",
    ".es",
    ".uy",
    ".org",
    ".gob",
    ".edu",
    ".it",
    ".br",
    ".ar"
  ];
  const domainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          const randomDomain =
            pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
          domainNames.push(randomDomain);
        }
      }
    }
  }

  for (let i = domainNames.length - 1; i > 0; i--) {
    const m = Math.floor(Math.random() * (i + 1));
    [domainNames[i], domainNames[m]] = [domainNames[m], domainNames[i]];
  }

  return domainNames;
};

window.onload = function() {
  const randomDomains = domainNameGenerator();
  const domainElement = document.getElementById("domain");
  document.getElementById("domain-btn").addEventListener("click", function() {
    domainElement.innerHTML = randomDomains.join("<br>");
  });
};
