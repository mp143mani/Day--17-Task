function countdown(callback) {
  var count = 10;
  var interval = setInterval(function() {
    count--;
    document.getElementById("countdown").innerHTML = count;
    if (count === 0) {
      clearInterval(interval);
      callback(function() {
        console.log("Callback inside the callback");
      });
    }
  }, 1000);
}

countdown(function(callback1) {
  document.getElementById("countdown").innerHTML = "Happy Independence Day!!";
  callback1(function(callback2) {
    console.log("Second callback");
    callback2();
  });
});
