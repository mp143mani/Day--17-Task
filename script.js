
      function countdown(callback) {
        var count = 10;
        var interval = setInterval(function() {
          count--;
          document.getElementById("countdown").innerHTML = count;
          if (count === 0) {
            clearInterval(interval);
            callback();
          }
        }, 1000);
      }

      countdown(function() {
        document.getElementById("countdown").innerHTML = "Happy Independence Day!!";
      });
 