import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    setHabits((Habit) => [...Habit,habitName]);
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    

  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits((Habit) => Habit.filter((habits) =>HabitList.id!==id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/
      <form className="add-New-Habit"/>
      }
      {/*TODO: add a list of habits*/}
    </div>
  );
}

export default App;
