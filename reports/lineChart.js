const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels: labels,
    datasets: [{
        label: 'Food',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
    }, {
        label: 'Entertainment',
        data: [100, 78, 26, 45, 80, 78, 45],
        fill: false,
        backgroundColor: 'rgb(255, 255, 0)',
        borderColor: 'rgb(255, 255, 0)',
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Expenses: $$$',
                color: 'rgb (75, 192, 192)',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                align: 'start', 
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('linechart'),
    config
);