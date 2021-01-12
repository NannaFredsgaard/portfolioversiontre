var i = 0;

var txt = 'HELLO,';

var speed = 400;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typing").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

