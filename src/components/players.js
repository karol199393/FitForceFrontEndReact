import React, { useState } from "react";

export default function Players() {
    const [weight, setWeight] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [chest, setChest] = useState("");
    const [arm, setArm] = useState("");
    const [calories, setCalories] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/api/v1/training-goals/addweight", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: weight }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        fetch("http://localhost:8080/api/v1/training-goals/addwaist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: waist }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        fetch("http://localhost:8080/api/v1/training-goals/addhip", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: hip }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        fetch("http://localhost:8080/api/v1/training-goals/addchest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: chest }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        fetch("http://localhost:8080/api/v1/training-goals/addarm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: arm }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        fetch("http://localhost:8080/api/v1/training-goals/addcalories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: calories }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Weight:
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <label>
                Waist:
                <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} />
            </label>
            <label>
                Hip:
                <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} />
            </label>
            <label>
                Chest:
                <input type="number" value={chest} onChange={(e) => setChest(e.target.value)} />
            </label>
            <label>
                Arm:
                <input type="number" value={arm} onChange={(e) => setArm(e.target.value)} />
            </label>
            <label>
                Calories:
                <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
