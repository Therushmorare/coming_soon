(function ($) {
  "use strict";

  $.fn.extend({ 

    countdown100: function(options) {
      var defaults = {
        endtime: 0, // Expecting a timestamp in milliseconds
      };

      var options = $.extend(defaults, options);

      return this.each(function() {
        var obj = $(this);
        
        // Ensure `endtime` is a valid Date object
        var deadline = new Date(parseInt(options.endtime)); 

        if (isNaN(deadline.getTime())) {
          console.error("Invalid endtime provided:", options.endtime);
          return;
        }

        initializeClock(deadline);

        function getTimeRemaining(endtime) { 
          var now = new Date().getTime(); // Get current time in milliseconds
          var t = endtime - now;

          if (t < 0) {
            return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
          }

          var seconds = Math.floor((t / 1000) % 60);
          var minutes = Math.floor((t / 1000 / 60) % 60);
          var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          var days = Math.floor(t / (1000 * 60 * 60 * 24));

          return { total: t, days: days, hours: hours, minutes: minutes, seconds: seconds };
        }

        function initializeClock(endtime) { 
          var daysSpan = $(obj).find('.days');
          var hoursSpan = $(obj).find('.hours');
          var minutesSpan = $(obj).find('.minutes');
          var secondsSpan = $(obj).find('.seconds');

          function updateClock() { 
            var t = getTimeRemaining(endtime);

            daysSpan.html(t.days);
            hoursSpan.html(('0' + t.hours).slice(-2));
            minutesSpan.html(('0' + t.minutes).slice(-2));
            secondsSpan.html(('0' + t.seconds).slice(-2));

            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
          }

          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
        }
      });
    }
  });

})(jQuery);
