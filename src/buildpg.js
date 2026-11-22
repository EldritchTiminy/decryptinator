function buildPage () {
  // grab page elements
  let content = document.getElementById("content");
  
  // create new structure elements
  let header = document.createElement("header");
  let heading = document.createElement("h1");
  let formBody = document.createElement("form");
  let keyIn = document.createElement("input");
  let texIn = document.createElement("textarea");
  
  // variables and text
  let headTex = "DECRYPTINATOR!";
  
  // assigning relationships
  heading.textContent = headTex;
  header.appendChild(heading);
  content.appendChild(header);
};

export default buildPage;