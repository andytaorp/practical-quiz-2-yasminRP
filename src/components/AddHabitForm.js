import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
  };

  return (
    //TODO: add a form to add a new habit
    <form className="add-form" onSubmit={handleSubmit}>
    <input 
    type="text" 
    value={habit} 
    onChange={(e) => setHabitName(e.target.value)}/>
    <button type="submit">Submit</button>
    </form>
  );
}
