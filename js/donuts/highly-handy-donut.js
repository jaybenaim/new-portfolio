// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";
Chart.defaults.global.animation.easing = "easeInOutBack";

$(function () {
  // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      Chart.helpers.each(Chart.instances, function (chart) {
        let ctx = chart.chart.ctx;
        let config = chart.config;
        chart.destroy();
        new Chart(ctx, config);
      });
    } else {
      Chart.helpers.each(Chart.instances, function (chart) {
        let ctx = chart.chart.ctx;
        let config = chart.config;
        chart.destroy();
        new Chart(ctx, config);
      });
      //   Chart.defaults.global.animation.easing = "easeInOutBack";
    }
    prevScrollpos = currentScrollPos;
  };
});
// Pie Chart Example
var ctx = document.getElementById("highlyHandyChart");
var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["React", "Firebase", "Express.js", "Node.js", "MongoDB"],
    datasets: [
      {
        data: [30, 20, 15, 15, 20],
        backgroundColor: [
          "rgba(56, 92, 224, 0.8)",
          "rgba(117, 242, 126, 0.8)",
          "rgba(0, 208, 182, 0.8)",
          "rgba(0, 173, 183, 0.8)",
          "rgba(39, 165, 232, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(56, 92, 224, 1)",
          "rgba(117, 242, 126, 1)",
          "rgba(0, 208, 182, 1)",
          "rgba(0, 173, 183, 1)",
          "rgba(39, 165, 232, 1)",
        ],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,

    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 75,
  },
});
