// What is JavaScript?
//     JavaScript is the programming language of the web, which can calculate, manipulate and validate data. It can also update and change both HTML and CSS.

//     JavaScript is one of the 3 languages all web developers must learn, along with HTML for content and CSS for layout. JavaScript programs the behavior of web pages. 



    //   JavaScript change value of HTML attribute - In this case from W3, JavaScript changes the value of the src (source) attribute of an image.</p>

// div id="bulbBrainstDiv"
    // button id="bulbOff" src='pic_bulbon.gif   <img id="bulbBrainstorm" src="pic_bulboff.gif"> 
        onclick:getElementById('bulbOn').src='pic_bulbon.gif'

        onclick:getElementById('bulbOff').src='pic_bulboff.gif'


// List and display 
            // HTML file addition, if used          <p id="demo1"></p>
let carName = "Volvo";
    document.getElementById("demo").innerHTML = carName;


// RANDOMIZE array or list of careers

    // let x = "Meghan's next career path should be ";
    // let y = random__;
    // let conCat = x + y;
    // console.log(conCat)

        let text1 = "Meghan's next career path should be ";
        // let text2 = "Doe";                                       // RANDOMIZE selection from array or other list
        let text3 = text1 + " " + text2;
        console.log(text3)


    // alert(conCat);
    // // window.alert (sum);


            // let x = 5;
            // let y = 6;
            // let sum = x + y;

            // alert(sum);
            // // window.alert (sum);


            
// List and display 
            // HTML file addition, if used          <p id="demo2"></p>

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 

