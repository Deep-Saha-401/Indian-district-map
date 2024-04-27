document.addEventListener("DOMContentLoaded", function() {
    var svgMap = document.getElementById("svg-map");
    var nameElement = document.getElementById("name");
    var nameParagraph = document.getElementById("namep");

    svgMap.addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName.toLowerCase() === "path" || "polygon" || "polyline") {
            var name = target.getAttribute("name");
            if (name) {
                nameParagraph.textContent = name;
                nameElement.classList.add("visible");
                //nameElement.style.left = event.pageX + "px";
               // nameElement.style.top = event.pageY + "px";
            }
        }
    });

    // Hide the name when clicking outside the SVG
    document.addEventListener("click", function(event) {
        if (!svgMap.contains(event.target)) {
            nameElement.classList.remove("visible");
        }
    });
});