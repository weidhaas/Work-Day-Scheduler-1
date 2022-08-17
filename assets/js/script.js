
//date 

const d = moment().format("dddd, MMMM Do, YYYY");
document.getElementById("currentDay").innerHTML = d;



//returning storage
$("#time9 .description").val(localStorage.getItem("9"));
$("#time10 .description").val(localStorage.getItem("10"));
$("#time11 .description").val(localStorage.getItem("11"));
$("#time12 .description").val(localStorage.getItem("12"));
$("#time13 .description").val(localStorage.getItem("1"));
$("#time14 .description").val(localStorage.getItem("2"));
$("#time15 .description").val(localStorage.getItem("3"));
$("#time16 .description").val(localStorage.getItem("4"));
$("#time17 .description").val(localStorage.getItem("5"));
$("#time18 .description").val(localStorage.getItem("6"));
$("#time19 .description").val(localStorage.getItem("7"));
$("#time20 .description").val(localStorage.getItem("8"));
$("#time21 .description").val(localStorage.getItem("9"));

$('button').on('click', setTasks)

function setTasks(a) {
  $(this).find().removeClass().addClass();

    
    //save input to localStorage (key + value)
    let y = $(this).parent().children('textarea').attr('id'); //The whole family is here
    let z = $(this).parent().children('.description').val();

    localStorage.setItem(y, z);
  }


/*
//Saves entries to local storage
function saveToLocal(obj) {
  var text = obj.value;
  var id = obj.id;
  localStorage.setItem(id, text);
}

function savedText() {
  var savedKey = Object.keys(localStorage);
  console.log(savedKey);
  for (let i = 0; i < savedKey.length; i++) {
    if (document.getElementById(savedKey[i]) != null) {
      document.getElementById(savedKey[i]).textContent = localStorage.getItem(
        savedKey[i]
      );
    }
  }
}

// save to local

    //save input to localStorage (key + value)
    let y = $(this).parent().children('textarea').attr('id'); //The whole family is here
    let z = $(this).parent().children('.description').val();

    localStorage.setItem(y, z);
  }



//
$('button').on('click', setTasks);

/*
function getInputFromTextBox() {
  var input = document.getElementsById("task").value;
  alert(input);
}
localStorage.setItem("task", textValue);


document.getElementsById("task").value

function logTask(event){
  //Get the text value of input
  let textValue = $(this).siblings(".taskTxtArea").val();
  //Get the time of the block
  let timeValue = $(this).siblings(".time").attr("data-time");
//store to local
localStorage.setItem("task", textValue);
localStorage.setItem("time", timeValue);
//console log to check
console.log(“textValue”)


$("nineam").on("click", logTask);


//button
/* 
var saveButton = document.querySelector("col-2 saveBtn")
var input = document.getElementsByClassName("bi-save2-fill")

function saveTasks() {
  localStorage.setItem("task", JSON.stringify(saveButton))
 }

 function getTasks(){

 }
/*
var ninebutton = document.getElementById("nineam");
console.log(ninebutton);

var ninefunction = function(){
  textarea.appendChild(textarea);
}*/

//test with ninebutton
/*
ninebutton.addEventListener("click", ninefunction)() {
  /*save*/

 /*save*/

    // events
    // save btn event
/*
    $('nineam').on('click', handleSaveTask);
    $('ten').on('click', handleSaveTask);
*/

/*
document.querySelector(".btn");
document.getElementsByClassName("col-2 saveBtn")
document.getElementById("nineam").innerHTML = 
$('nineam').on('click', logTask);
const tasktest = document.getElementById("nineam");
*/


//save to local storage


// variables





  
    // color the row based on hour 
    function colorRows() {
      // current hour
      const currentHour = moment().hours();
      console.log(currentHour);
      // loop through rows add color class based on time
      $('.row').each(function() {
        const rowHour = parseInt($(this).attr('data-time'));
        if (rowHour < currentHour) {
          $(this).addClass('gray');
        } else if (rowHour === currentHour) {
          $(this).addClass('red');
        } else {
          $(this).addClass('green');
        }
      })
    }
  
    // events

    // runs on page load
    // populate textarea with localstorage
  
    // loop through rows and add a class (gray, red, green)
    colorRows();
  
  });