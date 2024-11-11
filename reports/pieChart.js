const ctx = document.getElementById('pieChart').getContext('2d');
const label = ['Food', 'School', 'Transportation', 'Fun', 'Others'];
const myPieChart = new Chart(ctx, {

    type: 'pie', 
    data: {
            labels: label,
            datasets: [{
            label: 'Category',
            data: [255, 200, 180, 565, 300],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
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
            title: {
                display: true,
                text: 'Category Ranking',
                color: 'rgb (75, 192, 192)',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                padding: {
                    top: 20,
                    bottom: 20
                }
            },
            datalabels: {
                color: 'black',
                formatter: (value, context) => {
                    let total = context.chart._metasets[0].total;
                    let percentage = (value / total * 100).toFixed(1) + '%';
                    return percentage;
                },
                anchor: 'end',
                align: 'end', 
            }
        }
    },
    plugins: [ChartDataLabels]
});

