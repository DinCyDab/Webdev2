window.onload = function() {
    var ctx = document.getElementById('barChart').getContext('2d');
    
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Food', 'School', 'Transportation', 'Fun', 'Others'],
            datasets: [{
                label: 'Category', 
                data: [255, 200, 180, 565, 300], 
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
                borderColor: 'rgb(75, 192, 192)', 
                borderRadius: 10,
            }]
        },
        options: {
            responsive: true, 
            indexAxis: 'y', 
            scales: {
                x: {
                    beginAtZero: true,
                    display: false,
                    max: 1455,
                    grid: {
                        display: false 
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        display: false 
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem){
                            return tooltipItem.label + ': ' + tooltipItem.raw;
                        }
                    }
                },
                datalabels: {
                    anchor: 'end', 
                    align: 'end', 
                    color: 'black', 
                    formatter: function(value) {
                        return value; 
                    }
                }
            }
        },
        plugins: [ChartDataLabels] 
    });
};
