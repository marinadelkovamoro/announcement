console.log("This works!");

$("#clicked").click(function () {
  $(".container").append('<h3> 🎉 Whoo-Hoo! 🎉 </h3><h4> The Stork took off! </h4><h5>Estimated Time of Arrival:</h5><p id="arrival"> </p>');
  $("#clicked").hide();
});

// Coundown 
// Set the date we're counting down to
var countDownDate = new Date("Jun 1, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="arrival"
  document.getElementById("arrival").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("arrival").innerHTML = "EXPIRED";
  }
}, 1000);