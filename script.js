var start = new Date().getTime();

    function makeShapeAppear() {
      //Random Location
      var pixel = Math.random() * 400;

      document.getElementById("shape").style.top = pixel + "px";
      document.getElementById("shape").style.left = pixel + "px";
      document.getElementById("shape").style.right = pixel + "px";
      document.getElementById("shape").style.bottom = pixel + "px";

      //Random Size
      var shapeSize = (Math.random() * 400) + 100;

      document.getElementById("shape").style.width = shapeSize + "px";
      document.getElementById("shape").style.height = shapeSize + "px";

      //Random Color
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);

      document.getElementById("shape").style.backgroundColor = randomColor;

      //Change the shae to a Circle
      if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
      } else {

        document.getElementById("shape").style.borderRadius = "0";
      }

      //Make Shape Display Again
      document.getElementById("shape").style.display = "block";
      //Reset Time
      start = new Date().getTime();

    }

    function appearAfterDelay() {
      setTimeout(makeShapeAppear, (Math.random() * 3000));
    }

    appearAfterDelay();

    document.getElementById("shape").onclick = function () {
      document.getElementById("shape").style.display = "none";

      var end = new Date().getTime();
      var timeTaken = (end - start) / 1000;

      document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";

      appearAfterDelay();

    }