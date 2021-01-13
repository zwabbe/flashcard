/*
Upon a .click event method runs (line #) ;
The elmID is set to  the ID of the element that was clicked in the HTML page;
Takes elmID and attaches "."   -front
Gets the ID of the element that triggered the event.


*/
var action = true;

$(document).ready(function () {
  $(".clickable").click(function () {
    var elmID = $(this).attr('id');
    console.log(elmID);
    $("." + elmID + "-front").show();
    if (action || lastID !== elmID) {
      $("." + elmID + "-back").show();
      action = false;
    }
    else if (action !== true && lastID == elmID) {
      $("." + elmID + "-back").hide();
      action = true;
    }
    if (typeof lastID !== 'undefined' && lastID !== elmID) { $("." + lastID + "-back").hide(); }
    lastID = elmID;
  });
});
