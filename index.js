google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['programming languages', 'percentage', { role: 'style' } ],
        ['HTML', 95, 'color: gray'],
        ['CSS', 90, 'color: #76A7FA'],
        ['JAVASCRIPT', 80, 'opacity: 0.2'],
        ['JAVA', 70, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ['SQL', 60, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
      ]);


var chart = new google.visualization.BarChart(document.getElementById('myChart'));
  chart.draw(data, options);
}
