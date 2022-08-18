//date 

const d = moment().format("dddd, MMMM Do, YYYY");
document.getElementById("currentDay").innerHTML = d;

$(document).ready(function() {



    // functions
    function handleSaveTask() {
      console.log('hi from save')
      // get the text
      let textValue = $(this).siblings('.description').children('.task').val();
  
      // get the time
      let timeValue = $(this).parent().attr('data-time');
  
      console.log(textValue);
      console.log(timeValue);
  
      // save textarea text to local storage
      localStorage.setItem(timeValue, textValue);
  
    }
  

    //returning storage
$("#time9 .description").val(localStorage.getItem("9"));
$("#time10 .description").val(localStorage.getItem("10"));
$("#time11 .description").val(localStorage.getItem("11"));
$("#time12 .description").val(localStorage.getItem("12"));
$("#time13 .description").val(localStorage.getItem("13"));
$("#time14 .description").val(localStorage.getItem("14"));
$("#time15 .description").val(localStorage.getItem("15"));
$("#time16 .description").val(localStorage.getItem("16"));
$("#time17 .description").val(localStorage.getItem("17"));
$("#time18 .description").val(localStorage.getItem("18"));
$("#time19 .description").val(localStorage.getItem("19"));
$("#time20 .description").val(localStorage.getItem("20"));
$("#time21 .description").val(localStorage.getItem("21"));
  

    // save btn event
    $('#nineam').on('click', handleSaveTask);
    $('#tenam').on('click', handleSaveTask);
    $('#elevenam').on('click', handleSaveTask);
    $('#twelvepm').on('click', handleSaveTask);
    $('#onepm').on('click', handleSaveTask);
    $('#twopm').on('click', handleSaveTask);
    $('#threepm').on('click', handleSaveTask);
    $('#fourpm').on('click', handleSaveTask);
    $('#fivepm').on('click', handleSaveTask);
    $('#sixpm').on('click', handleSaveTask);
    $('#sevenpm').on('click', handleSaveTask);
    $('#eightpm').on('click', handleSaveTask);
    $('#ninepm').on('click', handleSaveTask);

  
  
    // runs on page load
    // populate textarea with localstorage
    $("#time9 .task").val(localStorage.getItem("9"));
    $("#time10 .task").val(localStorage.getItem("10"));
    $("#time11 .task").val(localStorage.getItem("11"));
    $("#time12 .task").val(localStorage.getItem("12"));
    $("#time13 .task").val(localStorage.getItem("13"));
    $("#time14 .task").val(localStorage.getItem("14"));
    $("#time15 .task").val(localStorage.getItem("15"));
    $("#time16 .task").val(localStorage.getItem("16"));
    $("#time17 .task").val(localStorage.getItem("17"));
    $("#time18 .task").val(localStorage.getItem("18"));
    $("#time19 .task").val(localStorage.getItem("19"));
    $("#time20 .task").val(localStorage.getItem("20"));
    $("#time21 .task").val(localStorage.getItem("21"));
    
  
    
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

    // loop through rows and add a class (gray, red, green)
    colorRows();
  
  });






  
  
  