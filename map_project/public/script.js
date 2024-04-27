document.addEventListener("DOMContentLoaded", function() {
    var svgMap = document.getElementById("svg-map");
    var nameElement = document.getElementById("name");
    var nameParagraph = document.getElementById("namep");

    svgMap.addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName.toLowerCase() === "path") {
            var name = target.getAttribute("name");
            if (name) {
                nameParagraph.textContent = name;
                nameElement.classList.add("visible");
                // Check if the name is "West Bengal" and open wb.html if true
                if (name === "West Bengal") {
                    window.location.href = "WestBengal/wb.html";
                }
                else if (name === "Andhra Pradesh") {
                    window.location.href = "Andhra_Pradesh/AP.html";
                }
                else if (name === "Arunachal Pradesh") {
                    window.location.href = "Arunachal_Pradesh/ArP.html";
                }
                else if (name === "Assam") {
                    window.location.href = "Assam/Asm.html";
                }
                else if (name === "Bihar") {
                    window.location.href = "Bihar/Bir.html";
                }
                else if (name === "Chhattisgarh") {
                    window.location.href = "Chhattisgarh/Chg.html";
                }
                else if (name === "Haryana") {
                    window.location.href = "Haryana/Hr.html";
                }
                else if (name === "Himachal Pradesh") {
                    window.location.href = "Himachal_Pradesh/HP.html";
                }
                else if (name === "Jharkhand") {
                    window.location.href = "Jharkhand/Jk.html";
                }
                else if (name === "Karnataka") {
                    window.location.href = "Karnataka/Kk.html";
                }
                else if (name === "Madhya Pradesh") {
                    window.location.href = "Madhya_Pradesh/MP.html";
                }
                else if (name === "Mizoram") {
                    window.location.href = "Mizoram/Miz.html";
                }
                else if (name === "Tamil Nadu") {
                    window.location.href = "Tamil%20Nadu/TN.html";
                }
                else if (name === "Telangana") {
                    window.location.href = "Telangana/Tl.html";
                }
                else if (name === "Uttaranchal") {
                    window.location.href = "Uttaranchal/Utt.html";
                }
                else if (name === "Nagaland") {
                    window.location.href = "Nagaland/Niga.html";
                }
                else if (name === "Andaman and Nicobar") {
                    window.location.href = "Andaman_and_Nicobar/AN.html";
                }
                else if (name === "Goa") {
                    window.location.href = "Goa/Goa.html";
                }
                else if (name === "Gujarat") {
                    window.location.href = "Gujarat/Guj.html";
                }
                else if (name === "Jammu and Kashmir") {
                    window.location.href = "Jammu_and_Kashmir/JK.html";
                }
                else if (name === "Kerala") {
                    window.location.href = "Kerala/Kla.html";
                }
                else if (name === "Ladakh") {
                    window.location.href = "Jammu_and_Kashmir/JK.html";
                }
                else if (name === "Maharashtra") {
                    window.location.href = "Maharashtra/Mhrs.html";
                }
                else if (name === "Manipur") {
                    window.location.href = "Manipur/Man.html";
                }
                else if (name === "Meghalaya") {
                    window.location.href = "Meghalaya/Mgly.html";
                }
                else if (name === "Orissa") {
                    window.location.href = "Orissa/Osi.html";
                }
                else if (name === "Punjab") {
                    window.location.href = "Punjab/pnj.html";
                }
                else if (name === "Rajasthan") {
                    window.location.href = "Rajasthan/Raj.html";
                }
                else if (name === "Sikkim") {
                    window.location.href = "Sikkim/Skim.html";
                }
                else if (name === "Tripura") {
                    window.location.href = "Tripura/Tpu.html";
                }
                else if (name === "Uttar Pradesh") {
                    window.location.href = "Uttar_Pradesh/UP.html";
                }
                else if (name === "Delhi") {
                    window.location.href = "Delhi/Dlh.html";
                }
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
