import React, { useState, useEffect } from "react";
import axios from "axios";

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
            <ul>
                {trainings.map(training => (
                    <li key={training.id}>{training.name}</li>
                ))}
            </ul>
        </div>
    );};

export default TrainingComponent;