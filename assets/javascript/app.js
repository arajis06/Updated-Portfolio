new WOW().init();

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

//doughnut-MDbootstrap
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    labels: ["HTML", "CSS", "Javascript", "JQuery", "Node.js"],
    datasets: [{
      data: [200, 170, 130, 90, 20],
      backgroundColor: ["#9933CC", "#46BFBD", "#ec407a", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#03a9f4", "#4a148c", "#616774"]
    }]
  },
  options: {
    responsive: true
  }
});
