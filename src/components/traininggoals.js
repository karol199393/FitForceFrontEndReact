import React, { useState } from "react";

export default function TrainingGoals() {
    const [date, setDate] = useState("");
    const [weight, setWeight] = useState("");
    const [muscle, setMuscle] = useState("");
    const [speed, setSpeed] = useState("");
    const [acceleration, setAcceleration] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [chest, setChest] = useState("");
    const [arm, setArm] = useState("");
    const [calories, setCalories] = useState("");
    const [trainingId, setTrainingId] = useState("");
    const [userId, setUserId] = useState("");        

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/api/v1/training-goals/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: date,
                weightLossGoal: weight,
                muscleGainGoal: muscle,
                increaseSpeed: speed,
                increaseAcceleration: acceleration,
                waistLossGoal: waist,
                hipLossGoal: hip,
                chestLossGoal: chest,
                armLossGoal: arm,
                caloriesBurned: calories,
                trainingId: trainingId,
                userId: userId
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            if (data) {
                return JSON.parse(data);
            } else {
                return {};
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Data:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <br></br>
            <label>
                Waga:
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br></br>
            <label>
                Pomiar siły wyciskanie na ławce:
                <input type="number" value={muscle} onChange={(e) => setMuscle(e.target.value)} />
            </label>
            <br></br>
            <label>
               Maksymalna Prędkość:
                <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} />
            </label>
            <br></br>
            <label>
                Przyśpieszenie na x metrach :
                <input type="number" value={acceleration} onChange={(e) => setAcceleration(e.target.value)} />
            </label>
            <br></br>
            <label>
                Pas:
                <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} />
            </label>
            <br></br>
            <label>
                Biodra:
                <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} />
            </label>
            <br></br>
            <label>
                Klatka:
                <input type="number" value={chest} onChange={(e) => setChest(e.target.value)} />
            </label>
            <br></br>
            <label>
                Biceps:
                <input type="number" value={arm} onChange={(e) => setArm(e.target.value)} />
            </label>
            <br></br>
            <label>
                Kalorie:
                <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
            </label>
            <br></br>
            <label>
                Trening ID:
                <input type="number" value={trainingId} onChange={(e) => setTrainingId(e.target.value)} />
            </label>
            <br></br>
            <label>
                User ID:
                <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </label>
            <br></br>
         
            <input type="submit" value="Submit" />
            <br></br>
            <input type="reset" value="Reset" />


        </form>
    );
}
