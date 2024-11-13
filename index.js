function clock() {
    var days = document.getElementById("days");
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
  
    var startDate = new Date("November 30, 2024 6:0:00").getTime();
    var now = new Date().getTime();
  
    var Dday = startDate - now;
  
    var d = Math.floor(Dday / (1000 * 60 * 60 * 24));
    var h = Math.floor(
      (Dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var m = Math.floor((Dday % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((Dday % (1000 * 60)) / 1000);
  
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
  }
  
  var interval = setInterval(clock, 1000);
  
  interval;
