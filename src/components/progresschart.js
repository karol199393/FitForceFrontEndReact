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
    const [goal, setGoal] = useState('weight-loss-goal');

    const goals = [
        'weight-loss-goal',
        'waist-loss-goal',
        'hip-loss-goal',
        'chest-loss-goal',
        'arm-loss-goal',
        'calories',
    ];

    useEffect(() => {
        fetch(`http://localhost:8080/api/training-goals/${goal}`)
            .then(response => {
                console.log('Response from API:', response);
                return response.json();
            })
            .then(data => {
                console.log('Data from API:', data);
                const chartData = {
                    labels: data.map(item => item.date),
                    datasets: [{
                        label: 'Goal Progress',
                        data: data.map(item => item.value),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                };
                setData(chartData);
            });
    }, [goal]);

    return (
        <div>
            <select value={goal} onChange={e => setGoal(e.target.value)}>
                {goals.map(goal => (
                    <option key={goal} value={goal}>{goal}</option>
                ))}
            </select>
            {data && <Line data={data} />}
        </div>
    );
}

export default ProgressChart;