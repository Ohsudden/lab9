import React, { useState } from 'react';
import './App.css';

function CreateForm({ addExpense, setShowForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const amount = parseFloat(event.target.amount.value);
    const date = event.target.date.value;
    addExpense({ title, amount, date });
    setShowForm(false); // Hide the form after submission
  };

  return (
    <form id="newform" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" required />
      <input type="number" name="amount" placeholder="Amount" step="0.01" required />
      <input type="date" name="date" placeholder="Date" required />
      <button type="submit" id="submit">Submit</button>
    </form>
  );
}

function Button({ addExpense }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      {!showForm && (
        <button id="form" onClick={handleClick}>Click me</button>
      )}
      {showForm && (
        <CreateForm addExpense={addExpense} setShowForm={setShowForm} />
      )}
    </div>
  );
}

export default Button;