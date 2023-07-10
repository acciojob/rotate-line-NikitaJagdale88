//your JS code here. If required.
 var line = document.getElementById("line");
        var rotation = 0;

        function rotateLine() {
            rotation += 1;
            line.style.transform = "rotate(" + rotation + "deg)";
            requestAnimationFrame(rotateLine);
        }

        rotateLine();