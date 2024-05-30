import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './progresschart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

function ProgressChart() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/weight-loss-goal/weight-loss-goal`)
            .then(response => {
                console.log('Response from API:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data from API:', data);
                const chartData = {
                    labels: data.map(item => item.date),
                    datasets: [{
                        label: 'Weight Loss Goal',
                        data: data.map(item => item.weight),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                };
                setData(chartData);
            });
    }, []);

    return (
        <div>
            {data && <Line data={data} />}
        </div>
    );
}

export default ProgressChart;