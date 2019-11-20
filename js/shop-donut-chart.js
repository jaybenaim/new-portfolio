// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";
Chart.defaults.global.animation.easing = "easeInOutBack";

// Pie Chart Example
var ctx = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["React-Bootstrap", "CSS", "React", "Django"],
    datasets: [
      {
        data: [10, 20, 40, 30],
        backgroundColor: [
          "rgba(39, 165, 232, 0.8)",
          "rgba(117, 242, 126, 0.8)",
          "rgba(32, 232, 215, 0.8)",
          "rgba(255, 166, 0, 0.8)"
        ],
        hoverBackgroundColor: [
          "rgba(39, 165, 232, 1)",
          "rgba(117, 242, 126, 1)",
          "rgba(32, 232, 215, 1)",
          "rgba(255, 166, 0, 1)"
        ],
        hoverBorderColor: "rgba(234, 236, 244, 1)"
      }
    ]
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
      caretPadding: 10
    },
    legend: {
      display: false
    },
    cutoutPercentage: 75
  }
});
