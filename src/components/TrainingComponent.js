import React, { useState, useEffect } from "react";
import axios from "axios";
import './training.css';

const TrainingComponent = () => {
    const [trainings, setTrainings] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/trainings')
            .then(response => {
                setTrainings(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/exercises')
            .then(response => {
                setExercises(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const assignExerciseToTraining = (exerciseId, trainingId) => {
        fetch(`http://localhost:8080/api/v1/exercises/${exerciseId}/assign/${trainingId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    };
    return (
        <div>
            <h1>Treningi</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwa Treningu</th>
                        <th>Przypisz Ćwiczenie</th>
                    </tr>
                </thead>
                <tbody>
                    {trainings.map(training => (
                        <tr key={training.id}>
                            <td>{training.id}</td>
                            <td>{training.name}</td>
                            <td>
                                <select onChange={(event) => setSelectedExercise(event.target.value)}>
                                    <option value="">Wybierz ćwiczenie</option>
                                    {exercises.map(exercise => (
                                        <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                                    ))}
                                </select>
                                <button onClick={() => assignExerciseToTraining(selectedExercise, training.id)}>Przypisz</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default TrainingComponent;