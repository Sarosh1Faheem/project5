import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [250, 100, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

function PieChart() {
    return (
        <div>
            <h2>Pie Chart (Example)</h2>
            <Pie data={data} height={80} />
        </div>
    );
}

export default PieChart;