import React, { useState, useEffect } from "react";
import axios from "axios";
import './training.css';

const TrainingComponent = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/trainings')
            .then(response => {
                setTrainings(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Treningi</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwa Treningu</th>
                    </tr>
                </thead>
                <tbody>
                    {trainings.map(training => (
                        <tr key={training.id}>
                            <td>{training.id}</td>
                            <td>{training.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default TrainingComponent;