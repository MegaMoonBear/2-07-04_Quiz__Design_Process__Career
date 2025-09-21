
// // div id="bulbBrainstDiv"
//     // button id="bulbOff" src='pic_bulbon.gif   <img id="bulbBrainstorm" src="pic_bulboff.gif"> 
    
//     // Grab the image element
//     const bulb = window.getElementById("bulbBrainstorm");

//     // Add event listeners to the buttons
//     document.getElementById("bulbOn").addEventListener("click", function() {
//         bulb.src = "pic_bulbon.gif";
//     });

//     document.getElementById("bulbOff").addEventListener("click", function() {
//         bulb.src = "pic_bulboff.gif";
//     });


// Random selection from array or list of careers

    function randomTitle(jobTitles = []) {
        if (!Array.isArray(jobTitles) || jobTitles.length === 0) {
            return "No titles available";
        }
        // Use Math.random() to generate a random number between 0 and 1,
        // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
        return jobTitles[Math.floor(Math.random() * jobTitles.length)];
    }

    // declare array of job titles
    const jobTitles = [
    "Conservation Technology Specialist",
    "Junior Data Scientist",
    "Research Data Coordinator",
    "AI/ML Data Annotator",
    "GIS Analyst",
    "Technical Project Coordinator"
    ];

    // Build and show message - call function and save result
    const text3 = "Meghan's next career path should be " + randomTitle(jobTitles) + ".";
    console.log(text3);
    window.alert(text3);
    document.getElementById("randomTitle").textContent = text3;



