
// div id="bulbBrainstDiv"
    // button id="bulbOff" src='pic_bulbon.gif   <img id="bulbBrainstorm" src="pic_bulboff.gif"> 
    
    // Grab the image element
    const bulb = window.getElementById("bulbBrainstorm");

    // Add event listeners to the buttons
    document.getElementById("bulbOn").addEventListener("click", function() {
        bulb.src = "pic_bulbon.gif";
    });

    document.getElementById("bulbOff").addEventListener("click", function() {
        bulb.src = "pic_bulboff.gif";
    });


// RANDOMIZE array or list of careers

    // // Function to return a random item from an array
    function randomTitle(jobTitles) {
        // Use Math.random() to generate a random number between 0 and 1,
        // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
        return jobTitles[Math.floor(Math.random() * jobTitles.length)];             // RANDOM fr array - see 2 commented lines above
        window.alert (text3);
    }

    // Declare and initialize an array of items
    let jobTitles = ["Conservation Technology Specialist", "Junior Data Scientist", "Research Data Coordinator", "AI/ML Data Annotator", "GIS Analyst", "Technical Project Coordinator"];
    

    // Output the result of the random_item function with the array of items
    console.log(randomTitle(jobTitles));

    let text1 = "Meghan's next career path should be ";
    // let text2 = "Doe";                                       
    let text3 = text1 + " " + randomTitle();
    console.log(text3)
    return text3;
    // alert(text3);
    window.alert (text3);
// Display age
document.getElementById("randomTitle").innerHTML =
"Of 6 titles, here's a randomized one: " + randomTitle + "."; 


