document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
  
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  }
);

function designEvent() {
    var eventType = document.getElementById("event-type-dropdown").value;
    var cultureTribe = document.getElementById("culture-tribe-dropdown").value;
    document.getElementById("event-type").textContent = eventType;
    document.getElementById("culture-tribe").textContent = cultureTribe;
    
  }

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("tab1").style.display = "block";
  document.getElementsByClassName("tablinks")[0].className += " active";
  
  var customizeLinks = document.querySelectorAll('.customize-link');
  
  customizeLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {  
    event.preventDefault();
      
    });
  });
