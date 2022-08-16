
//date 

const d = moment().format("dddd, MMMM Do, YYYY");
document.getElementById("currentDay").innerHTML = d;

// variables
$(document).ready(function() {



    // functions
    function handleSaveTask() {
      // get the text
      let textValue = $(this).siblings('.task').val();
  
      // get the time
      let timeValue = $(this).parent().attr('data-time');
  
      console.log(textValue);
      console.log(timeValue);
  
      // save textarea text to local storage
      localStorage.setItem(timeValue, textValue);
  
    }
  
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
    // save btn event
    $('#nine').on('click', handleSaveTask);
    $('#ten').on('click', handleSaveTask);
  
    // runs on page load
    // populate textarea with localstorage
  
    // loop through rows and add a class (gray, red, green)
    colorRows();
  
  });