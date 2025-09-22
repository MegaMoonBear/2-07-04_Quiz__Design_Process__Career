

/* =======================================================
   Example 1: Change Text Content
   HTML needed:
   <p id="message">Hello!</p>
   <button id="changeBtn">Change Text</button>
   ======================================================= */
document.getElementById("changeBtn").addEventListener("click", function() {
  document.getElementById("message").innerText = "You clicked the button!";
});


/* =======================================================
   Example 2: Change Style (Color Toggle)
   HTML needed:
   <p id="colorText">This text changes color.</p>
   <button id="colorBtn">Toggle Color</button>
   ======================================================= */
document.getElementById("colorBtn").addEventListener("click", function() {
  let text = document.getElementById("colorText");
  text.style.color = (text.style.color === "red") ? "blue" : "red";
});


/* =======================================================
   Example 3: Show/Hide an Element
   HTML needed:
   <p id="hiddenText">Now you see me...</p>
   <button id="toggleBtn">Show / Hide</button>
   ======================================================= */
document.getElementById("toggleBtn").addEventListener("click", function() {
  let el = document.getElementById("hiddenText");
  el.style.display = (el.style.display === "none") ? "block" : "none";
});


/* =======================================================
   Example 4: Update an Image Source
   HTML needed:
   <img id="myImage" src="https://via.placeholder.com/150" alt="placeholder"> 
   <button id="imgBtn">Change Image</button>
   ======================================================= */
document.getElementById("imgBtn").addEventListener("click", function() {
  document.getElementById("myImage").src = "https://via.placeholder.com/200";
});


/* =======================================================
   Example 5: Simple Alert with Input
   HTML needed:
   <input id="nameInput" type="text" placeholder="Enter your name">
   <button id="alertBtn">Say Hi</button>
   ======================================================= */
document.getElementById("alertBtn").addEventListener("click", function() {
  let name = document.getElementById("nameInput").value;
  alert("Hello, " + name + "!");
});


