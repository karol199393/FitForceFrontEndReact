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

function WeightLossGoalChart({ data }) {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Pomiar Wagi',
                data: data.map(item => item.weightLossGoal),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    return <Line data={chartData} />;
}

function CaloriesBurnedChart({ data }) {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Spalone Kalorie',
                data: data.map(item => item.caloriesBurned),
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    return <Line data={chartData} />;
}

function ArmMeasurementsChart({ data }) {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Pomiar Bicepsa',
                data: data.map(item => item.armLossGoal),
                fill: false,
                borderColor: 'rgb(100, 200, 132)',
            }
        ]
    };

    return <Line data={chartData} />;
}



function ProgressChart() {
    const [data, setData] = useState(null);
    const [selectedChart, setSelectedChart] = useState('weightLossGoal');

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/training-goals/getAll`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="progress-chart">
            <div>
                <input type="radio" id="weightLossGoal" name="chart" value="weightLossGoal" 
                    checked={selectedChart === 'weightLossGoal'} 
                    onChange={(e) => setSelectedChart(e.target.value)} />
                <label for="weightLossGoal">Pomiar wagi</label>
                <br></br>
                <input type="radio" id="caloriesBurned" name="chart" value="caloriesBurned" 
                    checked={selectedChart === 'caloriesBurned'} 
                    onChange={(e) => setSelectedChart(e.target.value)} />
                <label for="caloriesBurned">Spalone Kalorie</label>
                <br></br>
                <input type="radio" id="armMeasurements" name="chart" value="armMeasurements" 
                    checked={selectedChart === 'armMeasurements'} 
                    onChange={(e) => setSelectedChart(e.target.value)} />
                <label for="armMeasurements">Pomiar Ramion</label>
            </div>

            {data && selectedChart === 'weightLossGoal' && <WeightLossGoalChart data={data} />}
            {data && selectedChart === 'caloriesBurned' && <CaloriesBurnedChart data={data} />}
            {data && selectedChart === 'armMeasurements' && <ArmMeasurementsChart data={data} />}
        </div>
    );
}

export default ProgressChart;


    