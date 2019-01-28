function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "#3a7d9e";
    }
    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();