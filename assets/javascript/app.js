new WOW().init();

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

//doughnut-MDbootstrap
// var ctxD = document.getElementById("doughnutChart").getContext('2d');
// var myLineChart = new Chart(ctxD, {
//   type: 'doughnut',
//   data: {
//     labels: ["HTML", "CSS", "Javascript", "JQuery", "Node.js"],
//     datasets: [{
//       data: [200, 170, 130, 90, 20],
//       backgroundColor: ["#9933CC", "#46BFBD", "#ec407a", "#949FB1", "#4D5360"],
//       hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#03a9f4", "#4a148c", "#616774"]
//     }]
//   },
//   options: {
//     responsive: true
//   }
// });

function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.getElementById('#status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.getElementById('status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.getElementById('status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.getElementById('status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.getElementById('status').innerHTML = "Sending...";
  document.getElementById('contact-form').submit();

  }